/*	Write a program that creates an array 'Y' that contains all 
the odd numbers between 1 to 255. When the program is done, 'y' 
should have the value of [1, 3, 5, 7, ... 255].  */


var y = [];
for(var i = 1; i<256; i+=2){
	
	y.push(i);
	
}
console.log(y);