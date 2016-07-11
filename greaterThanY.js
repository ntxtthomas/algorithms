/*	Write a program that takes an array and returns the number of values 
in that array whose value is greater than y.  */
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