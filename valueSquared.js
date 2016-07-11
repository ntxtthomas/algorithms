/*	Given an array x (e.g. [1,5, 10, -2]), create an algorithm 
that squares each value in the array.    */

var x = [1,5,10,-2];

for(var i = 0; i < x.length; i++){
	x[i] *= x[i];
	console.log(x[i]);
}