var http = require('http');

var url = process.argv[2];

http.get(url, function callback(response) {
	response.on("data", function (data) {
		console.log(data);
	}).setEncoding('utf8');
	response.on("error", function (data) {
		console.log(error);
	})
	response.on("end", function (data) {
	})
});