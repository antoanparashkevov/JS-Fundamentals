function sequences2(data){
    let sortElements = data.map((array)=>JSON.parse(array).sort((a,b)=>b-a))//descending order by their elements
    // return sortElements
    let r = ''
    let uniqueAsString = []
    for(let arr of sortElements){
        if(!uniqueAsString.includes(JSON.stringify(arr))){
            uniqueAsString.push(JSON.stringify(arr))
        }
    }
    let uniqueAsArray = uniqueAsString.map((strArr)=>JSON.parse(strArr)).sort((a,b)=>a.length-b.length)
  for(let arr of uniqueAsArray){
      r+=`[${arr.join(', ')}]\n`
  }
    return r

}
console.log(sequences2
(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]))
