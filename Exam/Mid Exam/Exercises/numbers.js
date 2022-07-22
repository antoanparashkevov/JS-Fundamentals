function numbers(input) {
    let sequence = input.shift().split(' ').map(Number);
    // console.log(sequence)
    let index = 0;
    while (input[index] !== "Finish") {
        let tokens = input[index].split(' ');
        // console.log(tokens)
        let command = tokens[0];
        // console.log(command)
        if (command === "Add") {
            let value = Number(tokens[1]);
            // console.log(value)
            sequence.push(value)
        } else if (command === "Remove") {
            let value = Number(tokens[1]);
            if (sequence.includes(value)) {
                let indexOfValue = sequence.indexOf(value);
                // console.log(indexOfValue)
                sequence.splice(indexOfValue, 1)
            }

        } else if (command === "Replace") {
            let value = Number(tokens[1]);
            let replaceValue = Number(tokens[2])
            if (sequence.includes(value)) {
                let indexOfValue = sequence.indexOf(value);
                sequence.splice(indexOfValue, 1, replaceValue)
            }

        } else if (command === "Collapse") {
            let value = Number(tokens[1]);
            // console.log(value)
            let result = [];
            for (let i = 0; i < sequence.length; i++) {
                if (sequence[i] >= value) {
                    result.push(sequence[i]);
                    // let indexOf = sequence.indexOf(sequence[i])
                    // sequence.splice(indexOf, 1);
                    // let newLength = sequence.length
                    // sequence.length = newLength
                }
            }

            sequence = result;
        }
        index++;
    }
    console.log(sequence.join(' '))
}


numbers((["1 4 5 19",
    "Add 1",
    "Remove 4",
    "Finish"])
)
// numbers((["1 20 -1 10",
//     "Collapse 8",
//     "Finish"])
// )
// numbers(["5 9 70 -56 9 9",
//     "Replace 9 10",
//     "Remove 9",
//     "Finish"])
