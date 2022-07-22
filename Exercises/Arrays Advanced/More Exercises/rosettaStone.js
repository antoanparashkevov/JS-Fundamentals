function rosettaStone(array) {
    let length = Number(array.shift());
    // console.log(length)
    let code = array.splice(0, length)//start from 0 index and delete the count(length) -> [ '59 36', '82 52' ]
    code = code.map(element => element.split(' '))
    code = code.map(element => element.map(Number))
    console.log(code)
    array = array.map(string => string.split(' ').map(Number))
    // console.log(array)
    let result = '';
    let alphabet = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', "J", 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', "U", 'V', "W", 'X', 'Y', 'Z'];

    for (let row = 0; row < array.length; row++) {
        // console.log(array[row])
        for (let column = 0; column < array[row].length; column++) {
        // console.log(array[row][column])
            let currentElement = array[row][column]
            let modifier = code[row%code.length][column% code[0].length];
            result += alphabet[(currentElement+modifier)%alphabet.length]
        }
    }
    console.log(result)
}

rosettaStone(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']
)
