/**
 * 5 - Filtered ls
 *
 * Create a program that prints a list of files in a given directory,
 * filtered by the extension of the files. You will be provided a
 * directory name as the first argument to your program (e.g.
 * '/path/to/dir/') and a file extension to filter by as the second
 * argument.
 * 
 * For example, if you get 'txt' as the second argument then you will
 * need to filter the list to only files that end with .txt. Note that
 * the second argument will not come prefixed with a '.'.
 * 
 * The list of files should be printed to the console, one file per line.
 * You must use asynchronous I/O.
 *
 */

var fs = require('fs');
var path = require('path');

var directory = process.argv[2];

// Define extension, concatenating a "." before the extension provided
// by the arguments array, which doesn't come prefixed with a dot.
var extension = '.' + process.argv[3];

// Read the contents of the directory. Once this is completed, call the 
// filteredFiles function, passing in the result of invoking readdir (the list 
// of files in the dir) and the extension to be filtered.
fs.readdir(directory, function(err, list) {
    if (err) {
        console.log('Uh oh, something went wrong.');
    };
    filterFiles(list, extension);
});

// For each item in the files array, check whether the extension matches
// the extension we're filtering for. 
function filterFiles(files, extension) {
    files.forEach(function(file) {
        if (path.extname(file) === extension) {
            console.log(file);
        };
    })
};
