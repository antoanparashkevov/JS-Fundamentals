function signCheck(num1, num2, num3) {
    let input = [];
    input.push(num1, num2, num3);
    console.log(input);
    let isNegative = false
    let negativeCount = 0;
    for (let i = 0; i < input.length; i++) {
        let eachEl = Number(input[i]);
        // console.log(eachEl)
        if (eachEl < 0) {
            negativeCount++;
        }

    }
    if (negativeCount % 2 === 0) {
        isNegative = true;
    }
    if (!isNegative) {
    console.log('Negative')
    }else{
        console.log('Positive')
    }
}

signCheck(5,
    12,
    -15
)
signCheck(-6,
    -12,
    14
)
