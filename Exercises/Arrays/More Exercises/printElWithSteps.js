function printElWithSteps(arr) {
    let test = Number(arr[arr.length - 1]);
    let arr2 = []
    for (let i = 0; i < arr.length-1; i += test) {
        arr2.push(arr[i])
    }
    console.log(arr2.join(' '))
}

printElWithSteps(['5', '20', '31', '4', '20', '2'])
