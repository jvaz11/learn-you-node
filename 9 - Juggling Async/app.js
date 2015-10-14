var http = require('http');
var bl = require('bl');
var urls = [process.argv[2], process.argv[3], process.argv[4]];

// Set an initial value for urlCount
var urlCount = 3;

// declare an empty object to store the complete contents of each URL
var urlContents = {};

// Get the contents of the URL for each URL in the arguments array
urls.forEach(function(url, index) {
    http.get(url, function(response) {
        // pipe the response stream into the bl reader, which will concatenate
        // the chunks into one complete string
        response.pipe(
            bl(function(error, data) {
                if (error) {
                    console.log('Hmm...something went wrong.');
                }
                // Store the contents of this URL on the urlContents object. Using bracket notation,
                // not dot notation, I am naming each property with the index since it's conveniently provided
                // by the forEach method
                urlContents[index] = data.toString();
            })
        );
        response.on("error", function(error) {
            console.log(error);
        })
        response.on("end", function(data) {
            urlCount--;
            // once this URL has returned its entire contents, call this callback
            complete();
        })
    });

});

// This callback decrements the urlCount by 1. Once the last 
// URL has been returned completely (urlCount === 0), iterate over
// each property of the urlContents object
function complete() {
    if (urlCount === 0) {
        for (var url in urlContents) {
            console.log(urlContents[url]);
        }
    }
}
