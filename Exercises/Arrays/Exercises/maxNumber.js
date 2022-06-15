function maxNumber(arr) {
    let topInteger = [];
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        let isTopInteger = true;
        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];
            if (currentNum <= nextNum) {
                isTopInteger = false;
                break;
            }

        }
        if(isTopInteger){
            topInteger.push(currentNum);
        }
    }
    console.log(topInteger.join(' '))
}

maxNumber([1, 4, 3, 2])
