function sumFirstAndLastArrayElements(input) {
    let firstElement = input[0];
    let lastIndex = input.length-1;//this holds last index of the input array
    console.log(lastIndex);
    let lastElement = input[lastIndex];//lastIndex is integer >=0
    let sum = firstElement+lastElement;
    console.log(sum);

}

sumFirstAndLastArrayElements([20, 30, 40])
