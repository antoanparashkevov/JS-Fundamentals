function carWash(input) {
    let value = 0;

    let varietyOfValue = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i])
            if (arr[i] === 'soap') {
                value += 10;
            } else if (arr[i] === 'water') {
                value *= 1.2;
            } else if (input[i] === 'vacuum cleaner') {
                value *= 1.25;
            } else {
                value *= 0.9
            }
        }
        return value;
    }

    console.log(`The car is ${varietyOfValue(input).toFixed(2)}% clean.`)

}

carWash(
    ['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']
)
