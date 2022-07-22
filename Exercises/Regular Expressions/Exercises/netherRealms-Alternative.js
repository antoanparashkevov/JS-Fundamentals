function netherRealmsAlternative(data) {
    let book = {};
    let regExp = /\s*,\s*/g;//finds empty spaces
    let names = data.split(regExp)
    // console.log(names);

    let nameTest = /[^\s ,]+/

    for (let name of names) {
        if (nameTest.test(name)) {
            // console.log(name)
            let healthPattern = /[^0-9\+\-\*\/\.]/g;//find all digits, +, /, *, ., but with ^ in front of them, we say that we find the opposite
            let matchCharsToSum = name.match(healthPattern);
            // console.log(matchCharsToSum)
            let health = 0;
            for (let char of matchCharsToSum) {
                let value = char.charCodeAt(0);
                health += value;
            }
            // console.log(health)
            //find all symbols + or - from 0 to infinity, next we have a digit from 1 to infinity,
            //then we may have . and some digit from 1 to infinity, but may not have, and that's why
            //we put it into group and we set * because we may have or may not have
            let powerPattern = /[\+\-]*\d+(\.\d+)*/g;
            let matchDigitsToSum = name.match(powerPattern);
            let power = 0;
            // console.log(matchDigitsToSum)
            if (matchDigitsToSum === null) {
                power = 0;
            } else {
                let numberToCalculate = matchDigitsToSum.map(Number);
                numberToCalculate.forEach(digit => power += digit)
            }
            // console.log(power)
            //multiply and divide
            let multiAndDividePattern = /[\*\/]/g;
            let matchMultiDiv = name.match(multiAndDividePattern);
            // console.log(matchMultiDiv)
            if (matchMultiDiv !== null) {
                for (let symbol of matchMultiDiv) {
                    if (symbol === "*") {
                        power *= 2
                    } else if (symbol === "/") {
                        power /= 2;
                    }
                }
            }
            if (book.hasOwnProperty(name) === false) {
                book[name] = [health, power]//as a value we have an array with two elements (health and power)
            }
        }
    }
    let sortedByName = Object.entries(book)
    // console.log(sortedByName)
    // console.log('--------')
    sortedByName.sort((a,b)=>a[0].localeCompare(b[0]))//by alphabetical order in ascending order
    // console.log(sortedByName)
    for(let [name,value] of sortedByName){
        console.log(`${name} - ${value[0]} health, ${value[1].toFixed(2)} damage`)
    }
}

// netherRealmsAlternative('M3ph-0.5s-0.5t0.0**')
// netherRealmsAlternative('M3ph1st0**,      Azazel')
netherRealmsAlternative('M3ph1st0**, Azazel')
