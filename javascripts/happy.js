"use strict";

//grab a reference to the DOM elements we'll need
let input = document.getElementById("numberVal");
let happy = document.getElementById("happy");

//listen for the enter key
input.addEventListener("keyup", (e)=> e.keyCode === 13 ? run() : null);


//take a string like "19", 
//split returns an array like ["1", "9"]
//map each number string to a number ["1", "9"] becomes [1, 9]
//square each of those [1, 9] becomes [1, 81]
//add them together [1, 81] becomes 82
function sumSquares(numStr){

    let sum = numStr.split("")
                    .map((str)=> Number(str))
                    .map((num)=> num * num)
                    .reduce((num1,num2)=> num1 + num2);
    return sum;
};

//recursively check if you've reached 1 or 4 
//if reach 1, you're happy
//if you reach 4, you'll never be happy
//(All non-happy numbers follow sequences that reach the cycle: 4, 16, 37, 58, 89, 145, 42, 20, 4, ...)
function isHappy(num){
    switch(num){
        case 1:
            return true;
        case 4:
            return false;
        default:
            let reNumStr = num.toString();
            return isHappy(sumSquares(reNumStr));
    }
}


//happy message
function printHappy(val){
    happy.innerHTML = `<p>${val} is a happy number 😀</p>`;
}

//sad message
function printSad(val){
    happy.innerHTML = `<p>${val} is a sad number 😥</p>`;
}

//if it was not a positive integer
function printInputError(){
    happy.innerHTML = `<p>Positive integers only silly 😜</p>`;
}

//the main jam
function run(){

    //get the value and clear the input
    let val = input.value;
    input.value = "";

    //check if its a positive integer (thanks stack overflow questions/10834796) 
    let isInt = /^\+?\d+$/.test(val);

    //input's good, but is it happy?
    if(isInt && val > 0){
        let happy = isHappy(val);
        happy ? printHappy(val) : printSad(val);    
    } else {
        printInputError();        
    }

}//end run





