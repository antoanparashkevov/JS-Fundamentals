function arrayManipulator(arr, ArrayOfCommands) {
    for (let command of ArrayOfCommands) {
        let tokens = command.split(' ');
        let currCommand = tokens[0];
        if (currCommand === "add") {
            let index = Number(tokens[1]);
            let digit = Number(tokens[2])
            arr.splice(index, 0, digit);
        } else if (currCommand === "addMany") {
            let index = Number(tokens[1]);
            tokens.splice(0, 2)//we get the elements like there
            let numbersToAdd = tokens.map(Number);
            // console.log(numbersToAdd)
            arr.splice(index, 0, ...numbersToAdd)
            //spread operator takes the numbersToAdd array and concatenating it to the arr
            // console.log(arr)
        } else if (currCommand === 'contains') {
            let result = arr.indexOf(Number(tokens[1]));
            console.log(result)
        } else if (currCommand === 'remove') {
            let index = Number(tokens[1]);
            arr.splice(index, 1);
        } else if (currCommand === "shift") {
            let position = tokens[1];
            for (let i = 0; i < position; i++) {
                let numberToGoLeft = arr.shift();
                arr.push(numberToGoLeft);
                // console.log(arr);
            }
        } else if (currCommand === 'sumPairs') {
            let resultArray = [];
            if (arr.length % 2 !== 0) {
                arr.push(0);//that is the way to be sure that arr length is always even number
            }
            for (let i = 0; i < arr.length-1; i+=2) {
                let sum = arr[i] + arr[i+1]
                resultArray.push(sum);
            }
            // console.log(resultArray)
            arr = resultArray;
            // console.log(resultArray)
        }else if(currCommand === "print"){
            console.log(`[ ${arr.join(', ')} ]`)
        }
        // console.log(currCommand)
    }
}

// arrayManipulator([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
// )
// arrayManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
// )
arrayManipulator([1,2,3,4,5,6,7,8],["sumPairs",'print'])
