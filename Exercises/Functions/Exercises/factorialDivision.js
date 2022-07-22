function factorialDivision(firstNum, secondNum) {
    function firstFactorialCalculator(num1) {
        let result = 1;
        //with while
        // while(num1!==1){
        //     result*=num1;
        //     num1-=1;
        // }
        for (let i = num1; i >= 1; i--) {
            result *= i;
        }
        return result;
    }

    // console.log(FirstFactorialCalculator(firstNum))
    // console.log(FirstFactorialCalculator(secondNum))

    function DivisionNumbers(num1, num2) {
        return firstFactorialCalculator(num1) / firstFactorialCalculator(num2);
    }

    console.log(DivisionNumbers(firstNum, secondNum).toFixed(2))
}

factorialDivision(5, 2)
