/**
* Exercise 3 - My First I/O!
* 
* Write a program that uses a single synchronous filesystem operation to
* read a file and print the number of newlines (\n) it contains to the
* console (stdout), similar to running cat file | wc -l.
*
* The full path to the file to read will be provided as the first
* command-line argument. You do not need to make your own test file.
*
*/

var fs = require('fs');

// Get path to file from the arguments array. The first argument will always
// be the third item in the array.
var pathToFile = process.argv[2];

// Read the file using the native "fs" module.
var file = fs.readFileSync(pathToFile);

// Convert the buffer object to a string and split it into an array, with "\n"
// as the separator. Subtract 1 from the length of the array to get the number
// of newline characters because the last line in the document won't have one.
console.log(file.toString().split('\n').length - 1);