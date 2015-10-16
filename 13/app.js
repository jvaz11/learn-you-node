/**sss
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
    // Check the method property of the request to ensure the request is a POST request
    if (req.method === 'GET') {

        // Get the req.url object
        var parsedurl = url.parse(req.url, true);
        var pathName = parsedurl.pathname;
        // /api/parsetime
        
        // Get the query string
        var queryStringObj = parsedurl.query;
        
        // Determine the format by getting the name of the first property of the query string object 
        var format = Object.keys(queryStringObj)[0]; // iso
        console.log('format', format);


        if (pathName === '/api/parsetime') {


            res.writeHead(200, { 'Content-Type': 'application/json' });
        
            // Get the query parameter
            var unixTimeObject = parsedurl.query;
            console.log(unixTimeObject);

            // var queryStringObj = parsedurl.query;
            // {"iso":"2013-08-10T12:10:15.474Z"}
            // var isoTime = new Date(queryStringObj.iso);
            // console.log(isoTime.getMinutes());
            
            ///////
            
            
            if (format === 'iso') {
                var queryStringObj = parsedurl.query;
                var isoTime = new Date(queryStringObj.iso);
                console.log('isotime', isoTime);
                var isoTimeObject = {
                    'hour': isoTime.getMonth(),
                    "minute": isoTime.getMinutes(),
                    "second": isoTime.getSeconds()
                };
                res.write(JSON.stringify(isoTimeObject));
            } else if (format === 'unixtime') {
                var queryStringObj = parsedurl.query;
                var unixTimeObject = queryStringObj;
                res.write(JSON.stringify(unixTimeObject));
            } else {
                console.log('Endpoint not found. Sorry.');
            }
            res.end();
        }

    } else {
        console.log('Request received, but it was not a POST request.');
        res.end('Request received, but it was not a POST request.');
    }
});

server.listen(port);