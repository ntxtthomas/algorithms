/*	Given an array x (e.g. [1,5, 10, -2]), create an algorithm that 
prints the maximum number in the array, minimum value in the array 
as well as the average values in the array.   */

var x = [1,5,10, -2];
var max = x[0];
var min = x[0];
var sum = 0;

for(var i = 0; i < x.length; i++){
	if(x[i] > max){
		max = x[i];
	}
	if(x[i] < min){
		min = x[i];
	}
	sum += x[i];
	var avg = sum / x.length; 
}
console.log("Max:", max);
console.log("Min:", min);
console.log("Avg:", avg);

