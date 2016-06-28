/**
 * Created by emily.mckelvey on 6/27/2016.
 */
//  emKataFizzBuzz.js

//var returnArrayFromCsvString = function(string){
    //return string.split(",")

/*for(var num=0; num<=100; num++){
 if(num % 5==0 && num % 3==0) /*Num has to be divided by 3 & 5*/
//console.log("FizzBuzz")
//}if (num % 3==0){ //Num divided by 3 statement will say fizz
//console.log("Fizz")
}//if(num %5==0){ //Num divided by 5 statement will say buzz
//console.log("Buzz")

//var consoleRunner = function() {
//}



    var fizzBuzzMain = function (valueTested) {


        for (var i = 0; i <= 100; i++) {
            console.log(returnStringFizzBuzz(i));
        }


        //var fizzBuzzMain = function (valueTested)

        var returnStringFizzBuzz = (valueTested)
        var fizzOutput = 3; // dividing a number by 3
        var buzzOutput = 5; // dividing a number by 5
        var fizzAndBuzz = 15; // dividing by both numbers 3 & 5
        var testNumberConverted = valueTested || 20;

        if (isEvenlyDivisibleInteger(testNumberConverted, fizzAndBuzz)) {
            return ("FizzBuzz")
        }
        else if (isEvenlyDivisibleInteger(testNumberConverted, fizzOutput)) {
            return ("Fizz")
        }
        else if (isEvenlyDivisibleInteger(testNumberConverted, buzzOutput)) {
            return ("Buzz")
        }
        else {
            return (testNumberConverted);
        }
        var isEvenlyDivisibleInteger = function (dividend, divisor) {
            return (dividend % divisor === 0)

        }


}



    



