function amazingNumbers(num){
// let lastNum = num%10//we take the last digit of the num
    let result = 0;
    let numAsString = String(num);
    let special = false;
    for(let i = 0;i<numAsString.length;i++){
        result += Number(numAsString[i]);
    }
    // let resultAsString = String(result);
    let resultAsString = result.toString();
    for(let j = 0;j<resultAsString.length;j++){
        if(resultAsString[j] === "9"){
            special=true;
        }
    }
    let type;
    if(special === true){
        type = "True"
    }else{
        type = "False"
    }
    console.log(`${num} Amazing? ${type}`)
    // console.log(`${num} Amazing? ${special ? "True" : "False"} `) // with ternary operator
}
amazingNumbers(1233)
amazingNumbers(999)
