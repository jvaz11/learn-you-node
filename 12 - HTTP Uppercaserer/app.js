/**
* 11 - HTTP Uppercaserer
Write an HTTP server that receives only POST requests and converts incoming POST body characters to
 upper-case and returns it to the client.

Your server should listen on the port provided by the first argument to your program.
*/

var http = require('http'),
    fs = require('fs'),
    map = require("through2-map");

// Define port variable according to the program's first argument
var port = process.argv[2];

var server = http.createServer(function (req, res) {
    // Check the method property of the request to ensure the request is a POST request
    if (req.method === 'POST') {
        // Pipe the request stream into through2-map. Transform each chunk to a string first,
        // and then to uppercase
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
            // Pipe the transformed string into the response
        })).pipe(res);
   
        
        //** 
        // This wasn't part of the challenge, but since I learned how to do this recently, I decided to get
        // fancy and added functionality to creates a new text file containing the response to each new request. 
        //
        //<begin fancy file-writing code
        // Create a new unix timestamp and convert to a string so it can be included in the file name
        var date = new Date().getTime().toString();
        // Create a writable stream. This creates a unique-y file name for each request (concatenated as a
        // template string, which is some new ES6 magic that I just learned)
        var writable = fs.createWriteStream(`${__dirname}/instreammdddm${date}.txt`);
        req.on('data', function (chunk) {
            writable.write(chunk);
        });
        //</end fancy code>
        //**
        
        
    } else {
        console.log('Request received, but it was not a POST request.');
        res.end('Request received, but it was not a POST request.');
    }
});

server.listen(port);