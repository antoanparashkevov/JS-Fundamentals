function passwordValidation(password) {
    //this function returns boolean expression
    function isLengthEnough(pass) {
        return pass.length >= 6 && pass.length <= 10;
    }

    // console.log(isLengthEnough('log'))
    function isOnlyLettersAndDigits(myPassword) {
        for (let currChar of myPassword) {
            let currCharCode = currChar.charCodeAt(0);
            if (!(currCharCode >= 65 && currCharCode <= 90) &&
                !(currCharCode >= 97 && currCharCode <= 122) &&
                !(currCharCode >= 48 && currCharCode <= 57)) {
                return false;
            }
        }
        return true;
    }

    // console.log(isOnlyLettersAndDigits('login'))
    function isHasDigits(myPass) {
        let count = 0;
        for (let charElement of myPass) {
            let currChar = charElement.charCodeAt(0)
            if (currChar >= 48 && currChar <= 57) {
                count++
            }
        }
        // return count>=2 ? true: false;
        return count >= 2;
    }

    // console.log(isHasDigits('1dssdsd'))

    let isLengthValid = isLengthEnough(password);
    let isWithoutChars = isOnlyLettersAndDigits(password);
    let isHasAnyDigits = isHasDigits(password);


    if (isLengthValid && isWithoutChars && isHasAnyDigits) {
        console.log('Password is valid');
    }
    if (!isLengthValid) {
        console.log('Password must be between 6 and 10 characters')
    }
    if (!isWithoutChars) {
        console.log('Password must consist only of letters and digits')
    }
    if (!isHasAnyDigits) {
        console.log('Password must have at least 2 digits')
    }
}


passwordValidation('logIn')
