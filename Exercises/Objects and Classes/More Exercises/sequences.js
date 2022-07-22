function sequences(data) {
    let x = JSON.parse(data[0])//from string Array it parse into an array
    // console.log(x)
    // console.log(`-----`)
    let sorted = data.map((x) => JSON.parse(x).sort((a, b) => b - a))//in descending order we want to print all elements from an array
    // console.log(sorted)
    // console.log(`-----`)
    let r = ''
    let uniqueAsString = [];
    for (let arr of sorted) {
        // console.log(arr)//from array
        // console.log(JSON.stringify(arr))//to string Array
        // console.log(`-----`)
        if(!uniqueAsString.includes(JSON.stringify(arr))){
            uniqueAsString.push(JSON.stringify(arr))
        }


    }
    // console.log(uniqueAsString)
    // console.log(`-----`)
    let uniqueAsArray = uniqueAsString.map((array)=>JSON.parse(array))
    // console.log(uniqueAsArray)
    // console.log(`-----`)
    uniqueAsArray.sort((a,b)=>a.length-b.length)//ascending order by their length
    for(let arr of uniqueAsArray){
        r+=`[${arr.join(', ')}]\n`
    }
    return r;

}

console.log(sequences
(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]))
