function calculator(num1, sign, num2) {
    let result = 0

    switch (sign) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;
    }
    console.log(result.toFixed(2))
}

calculator(2, "+", 5)
