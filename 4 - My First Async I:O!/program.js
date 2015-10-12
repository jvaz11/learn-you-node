/**
 * 4 - My First Async I/O!
 * 
 * Write a program that uses a single asynchronous filesystem operation
 * to read a file and print the number of newlines it contains to the
 * console (stdout), similar to running cat file | wc -l.
 * 
 * The full path to the file to read will be provided as the first
 * command-line argument. 
 * 
 */

var fs = require('fs');

// Get path to file from the arguments array. The first argument will always
// be the third item in the array.
var pathToFile = process.argv[2];

// Asynchronously read the file using the readFile method of the "fs" module.
var file = fs.readFile(pathToFile, function(err, data) {
    if (err) {
        console.log('Uh oh, something went wrong.');
    }
    var lines = data.toString().split('\n').length - 1;
    // Convert the buffer object (data) to a string and split it into an array, with "\n"
	// as the separator. Subtract 1 from the length of the array to get the number
	// of newline characters because the last line in the document won't have one.

    console.log(lines);
});




