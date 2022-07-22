function stringSubstring(searchedWord, text) {
        let textAsArray = text.split(' ')
    // console.log(textAsArray)
    for(let word of textAsArray){
        word = word.toLowerCase()
        if(word === searchedWord.toLowerCase()){

           return searchedWord
        }
    }
    console.log(`${searchedWord.toLowerCase()} not found!`)
}

console.log(stringSubstring('javascript',
    'JavaScript is the best programming language'
))
