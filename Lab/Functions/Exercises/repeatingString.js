function repeatingString(str, n){
    let result = ''
    for(let i = 0;i< n;i++){
        result+=str
    }
    return result;

}

console.log(repeatingString('abc',3))
console.log(repeatingString('string',2))
