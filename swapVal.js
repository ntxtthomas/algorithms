/* Write a program that takes an array of numbers and returns an array 
where the first and last numbers in the array have been switched.For example 
say x = [2, 3, 5, 7, 6]. By the end of the program x, should be [6, 3, 5, 7, 2]. 
Do this without creating an empty array. */

var x = [2, 3, 5, 7, 6];

for(var i = 0; i < x.length; i++){
	var temp = x[0];
	x[0] = x[x.length-1];
	x[x.length-1] = temp; 
}
console.log(x);


