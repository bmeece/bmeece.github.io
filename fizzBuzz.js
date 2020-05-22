// My attempt at the  Fizz-Buzz challenge

// PROBLEM STATEMENT
// Write a short program that prints each number from 1 to 100 on a new line. 
// * For each multiple of 3, print "Fizz" instead of the number. 
// * For each multiple of 5, print "Buzz" instead of the number. 
// * For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

for(var fizzBuzz = 1, fizzBuzz = 1; fizzBuzz <= 100; fizzBuzz++){
    var say = "";
    if( fizzBuzz % 3 == 0){
        say += "Fizz";
    }
    if( fizzBuzz % 5 = 0){
        say += "Buzz";
    }
    if(say == ""){
        say = fizzBuzz;
    }    
    // console.log(); // Use this to display the output
    
    console.log(say);

    // Leverage the Modulus operator -> %
    // Learn about the Modulus operator: 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder
    
    // Hey, don't we need a FOR loop to count from 1 to 100?
    // Yes, yes we do - let's start with that!
}