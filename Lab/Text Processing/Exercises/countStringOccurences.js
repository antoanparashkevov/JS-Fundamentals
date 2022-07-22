function countStringOccurences(text, word) {
    // console.log(text.split('is'))

    //split this string into an array of words.
    let array = text.split(' ')
    console.log(array)

    //the function inside filter accept one word (this is called pedicat) and it will return true or false
    let counter = array.filter((element=>{
           return element === word
    }));
    console.log(counter)
    console.log(counter.length)
    //or with for-of with iterates through all words and if current word is equal to searched one, increase the counter by 1
    // for(let words of array){
    //     if(words === word){
    //         counter++
    //     }
    // }

    // console.log(counter)
}

countStringOccurences("This is a word and it also is a sentence is", "is");
