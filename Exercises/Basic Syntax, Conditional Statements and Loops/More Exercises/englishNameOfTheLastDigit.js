function englishNameOfTheLastDigit(num) {
    let numAsString = num.toString()
    console.log(numAsString)
    console.log(numAsString.length)
    let result = "";
    for (let i = numAsString.length - 1; i < numAsString.length; i++) {
        if (numAsString[i] === "0") {
            result = "zero"
        }
        if (numAsString[i] === "1") {
            result = "one";
        }
        if (numAsString[i] === "2") {
            result = "two";
        }
        if (numAsString[i] === "3") {
            result = "three";
        }
        if (numAsString[i] === "4") {
            result = "four";
        }
        if (numAsString[i] === "5") {
            result = "five";
        }
        if (numAsString[i] === "6") {
            result = "six";
        }
        if (numAsString[i] === "7") {
            result = "seven";
        }
        if (numAsString[i] === "8") {
            result = "eight";
        }
        if (numAsString[i] === "9") {
            result = "nine";
        }

    }
    console.log(result)
}

englishNameOfTheLastDigit(129)
