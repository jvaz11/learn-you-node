/**
* 10 - Time Server
Write a TCP time server!

Your server should listen to TCP connections on the port provided by the first argument to your program. 
For each connection you must write the current date & 24 hour time in the format:

    "YYYY-MM-DD hh:mm"

followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:

    "2013-07-06 17:42"
*/

var net = require('net')
var strftime = require('strftime') 

// Define port variable. Assign it the value of the first argument to the program
var port = process.argv[2];

var server = net.createServer(function (socket) {
	
	// Create super cool formatted date (as a string)
	var date = strftime('%F %R', new Date());
	
	// Pass the value of var date to the socket stream (which will then be displayed in the browser as plain text. magic.) 
	socket.end(date);

})
server.listen(port)