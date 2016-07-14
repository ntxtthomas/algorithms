/*	Using a range between 1 to 100, write an algorithm that produces "Fizz" everytime 
a number appears that is divisible by 3, "Buzz" everytime a number appears that is divisble 
by 5, and "FizzBuzz" everytime a number appears that is divisble by 3 and 5. */

function fizzBuzz()
{
	for (var i = 1; i < 100; i++)
	{
		if(i%3==0 && i%5==0){
			console.log("FizzBuzz");
		}
		else if(i%3==0){
			console.log("Fizz");
		}
		else if(i%5==0){
			console.log("Buzz");
		}
		else {
			console.log(i);
		}
	}
}
fizzBuzz();