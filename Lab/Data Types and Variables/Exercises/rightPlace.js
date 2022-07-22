function rightPlace(firstWord, symbol,secondWord){
    let result = '';
    // let result; //without value is undefined
    for(let i = 0;i<firstWord.length;i++){
        if(firstWord[i] === '_'){
            result+=symbol;
        }else{
            result+=firstWord[i];
        }
    }
    if(result===secondWord){
        console.log('Matched')
    }else{
        console.log('Not Matched')
    }


    //create new variable to keep firstWord and symbol
    //compare result
    //match and print message
    //-- read characters one by one
    //-- search for '_' and replace it with symbol variable

}
rightPlace('Str_ng', 'I', 'Strong');
// rightPlace('Str_ng', 'i', 'String');
