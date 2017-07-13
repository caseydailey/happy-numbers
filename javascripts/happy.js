console.log("happy 2");


let button = document.getElementById("btn-checkvalue");
let input = document.getElementById("numberVal");
input.addEventListener("keyup", (e)=> e.keyCode === 13 ? run() : null);
button.addEventListener("click", run);

function sumSquares(numStr){

    let sum = numStr.split("")
                    .map((letter)=> Number(letter))
                    .map((num)=> num * num)
                    .reduce((num1,num2)=> num1 + num2);

    console.log("sum of squares", sum);
    return sum;
};

function isHappy(num){
    if (num === 1){
        return true;
    } else if (num === 4){
        return false;
    } else {
        newNumStr = num.toString();
        return isHappy(sumSquares(newNumStr));
    }
};

function printHappy(val){
    console.log(`${val} is a happy number`)
}

function printSad(val){
    console.log(`${val} is a sad number`)
}


function run(){
    let val = input.value;
    input.value = "";
    let isInt = /^\+?\d+$/.test(val);
    if(isInt && val > 0){
        let happy = isHappy(val);
        happy ? printHappy(val) : printSad(val);    
    }else{
        console.log("Positive integers only please");
    }
}





