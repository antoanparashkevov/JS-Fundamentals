function demo(){
    let test = "ABC"
    // console.log(test.charCodeAt(1))
    let test2 = test.charCodeAt(1)
    let letter = String.fromCharCode(test2)
    console.log(letter)
    let text = "abv*8*/"
    let pattern = /(?<signs>[*\/])/g
    let match = text.match(pattern)
    console.log(match)
    // while(match!==null){
    //     console.log(match)
    //     match = pattern.exec(text)
    // }
}
demo()
