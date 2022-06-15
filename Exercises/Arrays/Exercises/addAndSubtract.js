function addAndSubtract(arr) {
    let sumArr = 0;
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i];
        if (arr[i] % 2 === 0) {
            arr2.push(arr[i] + i);
        } else {
            arr2.push(arr[i] - i);
        }
    }
    let sumArr2 = 0;
    for (let j = 0; j < arr2.length; j++) {
        sumArr2 += arr2[j];
    }
    console.log(arr2);
    console.log(sumArr)
    console.log(sumArr2)
}

addAndSubtract([5, 15, 23, 56, 35])
