function sumFirstAndLast(arr){
    let first = arr.shift()
    let last = arr.pop();
    let sum = Number(first)+Number(last)
    console.log(sum)
}

sumFirstAndLast(['5','10'])
sumFirstAndLast(['20','30','40'])
