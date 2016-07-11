/*	Given an array with multiple values (e.g. [-3, 3, 5, 7]), write a 
program that prints the maximum number in the array. */

var x = [-3, 3, 5, 7];
var max = x[0]; 
for(var i = 1; i < x.length; i++){
	if(x[i] > max){
		max = x[i];
	}
}
	console.log(max);




