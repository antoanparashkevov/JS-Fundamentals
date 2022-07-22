function replaceRepeatingChars(string) {
    let uniqueLetters = ''

    for(let i = 0;i<string.length;i++){
        let currentChar = string[i]//give us every character of the string
        //or
        // let currChar = string.charAt(i)
        let nextChar = string[i+1]
       if(currentChar!== nextChar){
           uniqueLetters+=currentChar
       }
    }
    console.log(uniqueLetters)
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
