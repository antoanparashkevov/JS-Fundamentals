function charactersInRange(char1,char2){
    let startChar = Math.min(char1.charCodeAt(0),char2.charCodeAt(0));
    let endChar = Math.max(char1.charCodeAt(0),char2.charCodeAt(0));
    let charsInRange = []
    for(let i = startChar +1;i<endChar;i++){
        // console.log(i)
        charsInRange.push(String.fromCharCode(i))
    }
    console.log(charsInRange.join(' '))
    // console.log(char1.charCodeAt(0),char2.charCodeAt(0))
}
charactersInRange('a','d')
