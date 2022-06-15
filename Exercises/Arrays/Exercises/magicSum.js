function magicSum(arr, number) {
    for (let i = 0; i < arr.length - 1; i++) {
        let currentElement = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = arr[j];
            let sum = currentElement + nextElement;
            if (sum === number) {
                console.log(`${currentElement} ${nextElement}`)
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8)
