/* Given an array of multiple values (e.g. [0, -1, 2, -3, 4, -5, 6]), write a program 
that removes any negative values in that array.  Once your program is done, the array 
should be composed of only the non-negative numbers, in their original order.  Do this 
without creating a temporary array; only use the pop() method to remove values from the array.*/

function removeNeg(x){

var negNum = 0; 
for(var i = 0; i < x.length; i++){
	if(x[i] < 0){
		negNum++;
	}
	else {
		x[i-negNum] = x[i];
	}
}
	while(negNum--){
		x.pop();
	}
	return x; 
}
removeNeg([2,-5,6,7,-8,11,13]);