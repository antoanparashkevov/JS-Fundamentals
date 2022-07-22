function lettersChangeNumbers(data){
let words = data.split(' ').filter(el=>el!=='')
    // console.log(words)
    let isLetterUpperCase = (letter)=> letter.toUpperCase() === letter
    let currentLetterAlphabetPosition = (letter)=> letter.charCodeAt(0) - 96
    // console.log(currentLetterAlphabetPosition('b'))
    let totalSum  = 0;
    words.forEach((letter)=>{
        let firstLetter = letter[0]
        // console.log(firstLetter)
        let lastLetter = letter[letter.length-1]
        // console.log(lastLetter)
        let number = +letter.substring(1,letter.length-1)//with + we convert to Number
        let firstCharPosition = currentLetterAlphabetPosition(firstLetter.toLowerCase())
        // console.log(beforePosition)
        let lastCharPosition = currentLetterAlphabetPosition(lastLetter.toLowerCase())

        if(isLetterUpperCase(firstLetter)){
            number/=firstCharPosition
        }else{
            number*=firstCharPosition
        }
        if(isLetterUpperCase(lastLetter)){
            number-=lastCharPosition
        }else{
            number+=lastCharPosition
        }
        totalSum+=number
    })
    console.log(totalSum.toFixed(2))
}
lettersChangeNumbers('A12b s17G')
// lettersChangeNumbers('P34562Z q2576f   H456z')
