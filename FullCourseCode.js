/**
 * Created by jason.wollam on 6/17/2016.
 */

// FullCourseCode.js

var returnArrayFromCsvString = function(string){
    return string.split(",")
}
// If a number is evenly divisible by 3 return fizz
// Rule number two: If the number is evenly divisble by five, return buzz
// Rule number three: If the number is evenly divisible by three and five, return FizzBuZZ
// Rule number four: If it does NOT match any other rules, just return the number 
// if is always looking for a true value. else is the false value
// function someFunction (someParameter) ----don't USE 
//console.log or return will work to output for users
// triple ='s "15" of 15 strictly only!! ALWAYS USE!!, == is the string equals 15
// if (test !== test)
//keep variables at the top
// if (typeof valueToTest ==="")
// truthyness and falsyness- booleen will allow values 0=false empty string=falsyness 
var consoleRunner = function() {
    
    for (var i =0; i<100; i++){
        console.log(returnStringFizzBuzz(i));
    }
}
    



var returnStringFizzBuzz = function(valueToTest){
    var fizz = 3;
    var buzz = 5;

    //15
    //var something=new Error ()
    //something

    try {
        var converted = valueToTest || 10;

        if (typeof converted !== "number") {
            throw new Error("Invalid input parameters");
        }

        if ( isEvenlyDivisibleInteger(converted,buzz) && isEvenlyDivisibleInteger(converted,fizz)) {
            return ("FizzBuzz")
        }

        else if (isEvenlyDivisibleInteger(converted,fizz)) {
            return ("Fizz");
        }

        else if (isEvenlyDivisibleInteger (converted,buzz)) {
            return ("Buzz");
        }
        else {
            return (converted);
        }
    } catch (ex) {

        throw ex;
    }


}

var isEvenlyDivisibleInteger = function(dividend, divisor){
    return (dividend % divisor === 0)

}








//module.exports = {
//    ReturnArrayFromCsvString : returnArrayFromCsvString,
//    FizzBuzzMain : fizzBuzzMain,
//    BoolCheckForEvenlyDivisibleInteger : isEvenlyDivisibleInteger,
 //   ReturnStringFizzBuzz : returnStringFizzBuzz
//}

