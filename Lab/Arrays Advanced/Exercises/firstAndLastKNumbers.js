function firstAndLastKNumbers(arr) {
    let k = arr.shift();

    let firstK = arr.slice(0,k);//take a copy from index 0 to index k(2)(exclusive)
    let lastK = arr.slice(-k)//-k takes last 2 elements
    console.log(firstK.join(' '))
    console.log(lastK.join(' '))


}

firstAndLastKNumbers([2, 7, 8, 9])
