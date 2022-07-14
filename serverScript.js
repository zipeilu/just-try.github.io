// Load HTTP module
const http = require("http");
const fs = require('fs');
const hostname = "127.0.0.1";
const port = 8000;

// Create HTTP server
const server = http.createServer(function(req, response) {

    fs.readFile('./index.html', function(error, content) {
       
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(content, 'utf-8');
        
    });
});

// Prints a log once the server starts listening
server.listen(port, hostname, function() {
   console.log(`Server running at http://${hostname}:${port}/`);
})

