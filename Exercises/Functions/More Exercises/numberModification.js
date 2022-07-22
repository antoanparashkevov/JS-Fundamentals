function numberModification(n) {
    let numberAsString = n.toString()
    console.log(`Our number into String type: ${numberAsString}`)
    console.log(`Our number into Number type: ${n}`)
    let count = numberAsString.length;
    console.log(`The length of the string input: ${count}`)
    let sumDigits = 0;
    let numberAsArray = numberAsString.split('')
    console.log(`Our number into Array type:`, numberAsArray)
    for (let i = 0; i < numberAsArray.length; i++) {
        sumDigits += Number(numberAsArray[i]);
    }
    console.log(`Sum of the digits because checking if average value is < 5: ${sumDigits}`)
    while ((sumDigits / count) < 5) {
        numberAsArray.push('9');//we push on every iteration '9' and check whether sumDigits/count is >=5
        let index = numberAsArray.length - 1//we take the last index from the new array
        console.log(`Last index for every iteration: ${index}`)
        sumDigits += Number(numberAsArray[index]);//we add the last digit from the new array
        count += 1;//we increase the array's length for every iteration

    }

    console.log(`Our last update for array converted into string: ${numberAsArray.join('')}`)
    console.log(`Last update for sum of digits: ${sumDigits}`)
}

// numberModification(5835)
numberModification(101)
