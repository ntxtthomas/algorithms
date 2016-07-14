/*	Given array and an additional value, insert this value at the beggining of the 
array. Do this without using any built-in array methods. */

// => [4,2,3,6,7,9]
var x = [2,3,6,7,9];
var y = 4;
x.push(y);
for(var i = x.length; i > 0; i--)
{
	x[i] = x[i-1];
} 
	var temp = x[0];
	x[0]=x[x.length-1];
	x[x.length-1]=temp;
	x.pop();

console.log(x);


/* alternate (borrowed from classmate);
*** optimized, eliminating the need for .push or .pop ***

function addFront(arr, val){
	arr.length = arr.length + 1;
	for(var i = arr.length - 1; i > 0; i--){
		arr[i] = arr[i - 1];
	}
	arr[0] = val;
	console.log(arr);
}
addFront([2,3,67,9], 4);
*/


/* using built in method .unshift() 
var x = [2,3,6,7,9];
x.unshift(4);
console.log(x); */
