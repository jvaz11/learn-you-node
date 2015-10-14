var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function (response) {
	// response is a readable stream, and is piped into the writable+readable stream
	// provided by bl
	response.pipe(
		bl(function (error, data) {
		if (error) {
			console.log('Hmm...something went wrong.');
		}
		console.log(data.toString().length);
		console.log(data.toString());
	})
	);
});
