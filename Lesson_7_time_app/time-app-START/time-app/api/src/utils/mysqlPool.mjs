import mysql from 'mysql2'

const MYSQL_HOST = process.env.MYSQL_HOST || 'mysql'
const MySQL_USER = process.env.MySQL_USER || 'root'
const MySQL_PORT = process.env.MySQL_PORT || '3306'
const MySQL_PASSWORD = process.env.MySQL_PASSWORD || 'password'
const MySQL_DB = process.env.MySQL_DB || 'admin'

const pool = mysql.createPool({
  connectionLimit: 100,
  host: MYSQL_HOST,
  port: MySQL_PORT,
  user: MySQL_USER,
  password: MySQL_PASSWORD,
  database: MySQL_DB,
})

const CREATE_TIMES_TABLE_SQL = `CREATE TABLE IF NOT EXISTS times (
  id INT AUTO_INCREMENT PRIMARY KEY,
  time TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`

pool.getConnection((err, connection) => {
  if (!err) {
    console.log('Connected to the MySQL DB - ID is ' + connection.threadId)
    const createTimeTable = CREATE_TIMES_TABLE_SQL
    connection.query(createTimeTable, (err) => {
      if (!err) {
        console.log('Times table was created')
      }
    })
    connection.release()
  }
})

export default pool
