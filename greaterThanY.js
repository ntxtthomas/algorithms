/*	Given an array x (e.g. [1,5, 10, -2]), create an algorithm that replaces any 
negative number with the value of 0.  When the program is done x should 
have no negative values (e.g. [1, 5, 10, 0]).  */

var x = [1,3,5,7];
y = 3;
var count = 0; 
for(var i = 0; i < x.length; i++){
	if(x[i] > y)
	{
		count++;
	}	
}
console.log(count);

