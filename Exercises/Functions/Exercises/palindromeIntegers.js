function palindromeIntegers(input) {
    let intArray = input;


    function isPal(oneNumber) {
        let startNum = oneNumber;
        let reverseOneNum = Number(startNum.toString().split('').reverse().join(''));

        return startNum === reverseOneNum;
    }

    for (let i = 0; i < intArray.length; i++) {
        let currentNum = intArray[i];
        console.log(isPal(currentNum));
    }

}

palindromeIntegers([123, 323, 421, 121])
