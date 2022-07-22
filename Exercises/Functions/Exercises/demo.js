// console.log(result1(1,2))//it doesn't work
function sumNum(firstNum, secondNum) {
    let result = firstNum + secondNum;
    return result
}

console.log(sumNum(1, 2));
let functionRes = sumNum(5, 5);
console.log(functionRes);

let result = (firstN, secondN) => {
    return firstN + secondN;
}
console.log(result(4, 5))

//We can not access functions defined like this because hoisting doesn't working.
//Because we save the function in the variable, not alone and independent
let result1 = function test(num1, num2) {
    return num1 + num2;
}

function firstProgram(firstName, secondName, cityName, age) {
    let fullName = firstName + " " + secondName;//concatenation
    let fullSentence =  (city, age)=> {
        //we get fullName variable from above
        console.log(`I'm ${fullName} from 
        ${city ? city : "Sofia"}
         and I'm ${age} years old`);
    }
    //we get cityName and age variables from firstProgram parameters.
    return fullSentence(cityName,age)
}
//this is the arguments for firstProgram function.
firstProgram('Antoan','Parashkevov','Pleven',21)
