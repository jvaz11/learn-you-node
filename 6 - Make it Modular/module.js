var fs = require('fs');
var path = require('path');

module.exports = function (directory, extension, callback) {
    extension = '.' + extension;
    fs.readdir(directory, function (err, files) {
        if (err) {
            console.log('Uh oh, something went wrong: ' + err);
            return callback(err);
        }
        var filteredList = [];
        files.forEach(function (file) {
            // For each item in the files array, check whether the extension matches
            // the extension we're filtering for.     
            if (path.extname(file) === extension) {
                filteredList.push(file);
            }
        });
        return callback(null, filteredList);
    });
}