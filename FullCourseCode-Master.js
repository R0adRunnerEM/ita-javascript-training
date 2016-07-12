/**
 * Created by jason.wollam on 6/17/2016.
 */

// FullCourseCode.js

var returnArrayFromCsvString = function(string){
    return string.split(",")
}

var fizzBuzzMain = function(maxIterations){
    var responseArray = [];
    var iterations  = (maxIterations == undefined)? 100 : maxIterations;

    try{

        for(var i = 0; i < iterations; i++){
            responseArray.push(returnStringFizzBuzz(i));
        }

        //return responseArray;
    }catch(ex){
        throw ex
    }
}

var returnStringFizzBuzz = function(intUnderTest){
    var fizz = 3;
    var buzz = 5;

    if(isEvenlyDivisibleInteger(intUnderTest, fizz) && isEvenlyDivisibleInteger(intUnderTest, buzz)){
        return "FizzBuzz";
    }

    if(isEvenlyDivisibleInteger(intUnderTest, fizz)){
        return "Fizz";
    }

    if (isEvenlyDivisibleInteger(intUnderTest, buzz)){
        return "Buzz";
    }

    return intUnderTest;
}

var isEvenlyDivisibleInteger = function(dividend, divisor){
    var response = (!isNaN(dividend % divisor))? !(dividend % divisor) : undefined;

    return response
}

module.exports = {
    ReturnArrayFromCsvString : returnArrayFromCsvString,
    FizzBuzzMain : fizzBuzzMain,
    BoolCheckForEvenlyDivisibleInteger : isEvenlyDivisibleInteger,
    ReturnStringFizzBuzz : returnStringFizzBuzz
}

