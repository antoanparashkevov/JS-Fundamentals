function ladyBugs_demo(input) {
    let n = input.shift();
    // console.log(n)
    let field = new Array(n).fill(0);//n is the length of field array
    // console.log(field);
    //parse field
    let ladyBugIndexes = input
        .shift()
        .split(' ')
        .map(Number);//take array of values and on every value convert from String to Number
    for (let index of ladyBugIndexes) {
        if (field[index] !== undefined) {//because all non-existed indexes his types are undefined
            field[index] = 1;
        }

    }

    // console.log(field);
    // console.log(ladyBugIndexes);
    // console.log(input);
    for (let command of input) {

        //parse command
        let tokens = command.split(' ')
        // console.log(tokens);
        let startingIndex = Number(tokens[0])
        let currentIndex = startingIndex
        let direction = tokens[1];
        let offset = direction === "left" ? Number(tokens[2]) * -1 : Number(tokens[2]);



        //if direction is right -> add offset to current index.
        //if direction is left -> subtract offset from current index.

        //repeat fly operation until
        //-found empty cell
        //OR end of field

        //to stop the operation
        while (currentIndex < 0 && currentIndex< n || field[currentIndex] !== 0){
            currentIndex+=offset
        }
        //to continue the operation
        if(field[startingIndex] === 1 && currentIndex >=0 && currentIndex < n){
            field[startingIndex] = 0;
            field[currentIndex] = 1;
        }
    }

    //print result
    console.log(field.join(' '));
}

ladyBugs_demo(
    [3, '0 1 2',
        '0 right 1',
        '2 right 1']
)
