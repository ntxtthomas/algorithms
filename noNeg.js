/*	Given an array x (e.g. [1,5, 10, -2]), create an algorithm that 
prints the maximum number in the array, minimum value in the array 
as well as the average values in the array.   */

var x = [1,5, 10, -2];

for(var i = 0; i < x.length; i++){
	if(x[i] < 0)
	{
		x[i] = 0;
	}
}
console.log(x);
