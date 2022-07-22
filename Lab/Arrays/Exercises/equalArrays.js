function equalArrays(arr1, arr2) {
    let isIdentical = true;
    let sum = 0;

    //we parse two arrays from string to number

    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = Number(arr1[i]);
    }
    for (let j = 0; j < arr2.length; j++) {
        arr2[j] = Number(arr2[j]);

    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            isIdentical = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        } else {
            sum += arr1[i];
        }
    }
    if (isIdentical === true) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }

}

equalArrays(['10', '20', '30'], ['10', '20', '30'])
