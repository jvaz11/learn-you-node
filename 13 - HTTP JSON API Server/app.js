/**
* 13 -  HTTP JSON API Server
Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect 
the request to contain a query string with a key 'iso' and an ISO-format time as the value.

For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

    {
      "hour": 14,
      "minute": 23,
      "second": 15
    }

Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time
 in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'. For example:

    { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to your program.
*/

var http = require('http'),
    url = require("url");

// Define port variable according to the program's first argument
var port = process.argv[2];

var server = http.createServer(function (req, res) {
    // Check the method property of the request to ensure the request is a GET request
    if (req.method === 'GET') {

        // Get the req.url object
        var parsedurl = url.parse(req.url, true);
        var pathName = parsedurl.pathname;
        
        // Get the query string
        var queryStringObj = parsedurl.query;

        res.writeHead(200, { 'Content-Type': 'application/json' });
        
        // Get the query parameter
        var queryStringObj = parsedurl.query;

        if (pathName === '/api/parsetime') {
            var isoTime = new Date(queryStringObj.iso);
            var isoTimeObject = {
                'hour': isoTime.getHours(),
                "minute": isoTime.getMinutes(),
                "second": isoTime.getSeconds()
            };
            res.write(JSON.stringify(isoTimeObject));
        } else if (pathName === '/api/unixtime') {
            var unixTime = new Date(queryStringObj.iso).getTime();
            res.write(JSON.stringify({ 'unixtime': unixTime }));
        } else {
            res.writeHead(404, 'Endpoint not found. Sorry.')
            res.end()
        }
        res.end();


    } else {
        console.log('Request received, but it was not a GET request.');
        res.end('Request received, but it was not a GET request.');
    }
});

server.listen(port);