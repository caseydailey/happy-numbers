console.log("main.js in happy");

//starting with a positive integer
//replace the number by the sum of the squares of its digits
//and repeat the provess until the number either equals 1
//(where it will stay) or it loops endlessly in a cycle
//that does not include 1. those numbers for which this process ends in 1 are happy numbers,
//while those that do not end in 1 are unhappy numbers (or sad numbers). 


// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1


//we're gonna initialize this as a string 
//for reasons having to do with the textbox we'll be using
let numString = "19";

let sumOfSquares = numString.split("")
                            .map((str)=> Number(str))
                            .map((num)=> num * num)
                            .reduce((num1,num2)=> num1 + num2);

console.log("sumOfSquares", sumOfSquares);

