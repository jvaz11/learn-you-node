var module = require('./module');

var directory = process.argv[2];
var extension = process.argv[3];

module(directory, extension, function (err, data) {
	if (err) {
		console.log('Error!' + err);
		return err;
	}
	data.forEach(function(file) {
		console.log(file);
	});
});
