function oddAndEvenSum(number) {
    let numToStr = number.toString();
    let sumOdd = (n) => {
        let oddSum = 0;
        for (let i = 0; i < n.length; i++) {
            let currNum = Number(n[i]);
            if (currNum % 2 !== 0) {
                oddSum += currNum;
            }
        }
        return oddSum;

    }
    let sumEven = (m) => {
        let evenSum = 0;
        for (let j = 0; j < m.length; j++) {
            let currNum = Number(m[j]);
            if (currNum % 2 === 0) {
                evenSum += currNum;
            }
        }
        return evenSum;
    }
    console.log(`Odd sum = ${sumOdd(numToStr)}, Even sum = ${sumEven(numToStr)}`);

}

oddAndEvenSum(1000435);
