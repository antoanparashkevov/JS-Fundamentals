function pascalCaseSplitter(text){
        let wordsAsArray = []
    let currentWord = text[0]
    for(let i = 1;i<text.length;i++){
        if(text[i].toUpperCase() !== text[i]){//if we have only Small-case letters, concat it
            currentWord = currentWord.concat(text[i])
        }else{
            wordsAsArray.push(currentWord)//but if we find Upper-case letter, push the word
            currentWord = text[i]//and take the Upper-case letter
        }

    }
    wordsAsArray.push(currentWord)

    console.log(wordsAsArray.join(', '))
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
