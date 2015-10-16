/**
* 11 - HTTP File Server
Write an HTTP server that serves the same text file for each request it receives.

Your server should listen on the port provided by the first argument to your program.

You will be provided with the location of the file to serve as the second command-line argument.
 You must use the fs.createReadStream() method to stream the file contents to the response.
*/

var http = require('http');
var fs = require('fs');

// Define port and fileLocation variables according to the program's arguments 
var port = process.argv[2];
var fileLocation = process.argv[3];

var server = http.createServer(function (req, res) {

    // Write the header of the http response object, 200 is a success response status code
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(fileLocation).pipe(res);

});

server.listen(port);