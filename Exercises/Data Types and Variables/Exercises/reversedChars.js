function reversedChars(c1, c2, c3) {
    //First way
    console.log(c3 + " " + c2 + " " + c1);
    //Second way
    let input = [c1, c2, c3];
    let empty = '';
    for (let i = input.length - 1; i >= 0; i--) {

        empty += input[i] + " ";

    }
    console.log(empty);
    //Third way
    let array = [c3,c2,c1].join(' ');
    console.log(array)
}

reversedChars('A', 'B', 'C')

function arr(...params){//... this is spread operator
    console.log(params)//this transform it to one array with input elements
    console.log(params.reverse())
    console.log(params.reverse().join(" "))//join returns a new string by concatenating all elements from an array
}

arr('A','B','C','D');
