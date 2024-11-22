import fs from 'fs'

fs.appendFile('my_file.txt', 'File was created by Node.js', (err) => {
    if (err) throw err
    console.log('File was saved!')
})

setTimeout(() => console.log('The End'), 60000)