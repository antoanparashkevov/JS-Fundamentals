function printCharacters(string){
    // for(let i = 0;i<string.length;i++){
    //     console.log(string[i])
    // }
    //or
    for(let character of string){//strings can be iterated through for-of just like arrays
            console.log(character)
    }
}
printCharacters('AWord');
// printCharacters('Hello Javascript!');
