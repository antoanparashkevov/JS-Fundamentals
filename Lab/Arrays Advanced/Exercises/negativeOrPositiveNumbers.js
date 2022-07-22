function negativeOrPositiveNumbers(arr){
    let result = [];
    for (let arrElement of arr) {
        if(arrElement>=0){
            result.push(arrElement)
        }else{
            result.unshift(arrElement)
        }
        // console.log(arrElement)
    }
    console.log(result.join('\n'))
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])
// negativeOrPositiveNumbers(['3', '-2', '0', '-1'])
