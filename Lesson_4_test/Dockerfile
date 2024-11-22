FROM httpd:latest

# Set the ServerName to suppress the warning
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

# Copy your static HTML files to the web server directory
COPY html /usr/local/apache2/htdocs/

# Expose port 80 for HTTP traffic
EXPOSE 80


