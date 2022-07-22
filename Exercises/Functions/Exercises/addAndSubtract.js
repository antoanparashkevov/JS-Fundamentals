function addAndSubtract(num1, num2, num3) {
    function sum(firstNum, secondNum) {
        return firstNum + secondNum;
    }
    let subtract = (sumResult,n3)=>{
        return sumResult-n3;
    }
    let result = sum(num1,num2);
    let finalResult = subtract(result,num3)
    console.log(finalResult)

}

addAndSubtract(23, 6, 10)
