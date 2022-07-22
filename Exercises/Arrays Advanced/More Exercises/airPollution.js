function airPollution(mapOfSofia, commands) {
    // console.log(mapOfSofia)
    let matrix = mapOfSofia.map(line => line.split(' ').map(Number))
    // console.log(matrix)
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i].split(' ')[0]//take the first element of the new command array
        // console.log(command)
        let number = Number(commands[i].split(' ')[1])
        // console.log(number)
        //all elements from matrix can't be zero or under zero values
        //we have array property who check every array of the matrix(every row) and another map function that checks every element
        //in every array who is under zero to be zero otherwise to stay at the same value like before.
        matrix = matrix.map(array => array.map(el => el < 0 ? el = 0 : el));
        if (command === "breeze") {
            matrix[number] = matrix[number].map(el => el - 15);//for specified row who is given by number(as a index of the row)
            //to reduce the values in this row by 15
        } else if (command === "gale") {
            //for every array(row) with given number(as a index of the column) reduce the values in this column by 20
            matrix.forEach(array => array[number] = array[number] - 20);
        } else if (command === "smog") {
            //for every array (row) of our matrix and for every element from every array (row), add the number value
            matrix = matrix.map(array => array.map(element => element + number));
        }
    }
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        //this will give us every element from our array(row) <--this is matrix[i] who is bigger or equal than 50
        let pollutedBlocks = matrix[i].filter(element => element >= 50);//this will return an array with one element for every loop
        pollutedBlocks.forEach((element,index) => result.push(`[${i}-${matrix[i].indexOf(element,index)}]`))
        // console.log(pollutedBlocks)
    }
    // console.log(result)
    if (result.length === 0) {//if after looping this array doesn't have any elements, we don't have polluted areas
        console.log('No polluted areas')
    } else {
        console.log(`Polluted areas: ${result.join(', ')}`)
    }

}

airPollution(['5 7 72 14 4',
        '41 35 37 27 33',
        '23 16 27 42 12',
        '2 20 28 39 14',
        '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']
)
//• 	"breeze {index}" – index is the row where all column’s value drops by 15 PM
// •	"gale {index}" – index is the column in all rows where value drops by 20 PM
// •	"smog {value}" – all blocks in the map increase equally by the given value’s PM
