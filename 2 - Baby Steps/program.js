/**
* Exercise 2
* 
* Write a program that accepts one or more numbers as command-line
* arguments and prints the sum of those numbers to the console (stdout).
*
*/

(function(){
	var sum = 0;
	for(a = 2; a < process.argv.length; a++) {
		sum += +process.argv[a];
	}
	console.log(sum);
}());

/**
* Solution Explanation
*
* My solution is a simple IIFE that loops through the process.argv
* array, beginning with the item at index 2 and ending with the last
* item in the array. I begin at index 2 because the first two items in
* this array will always be the path to node and the path to the app.
*
*/