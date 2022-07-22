function mirrorWords(data) {
    let pattern = /(@|#)([a-zA-Z]{3,})\1{2}([a-zA-Z]{3,})\1/gm
    let result = [];
    let counter = 0
    //take text from input
    let text = data.shift()

    //find occurrences
    let match = pattern.exec(text);

    while (match !== null) {
        // console.log(match)
        let word1 = match[2]
        let word2 = match[3]
        let reversed = word2.split('').reverse().join('')
        // console.log(word1,reversed)
        counter++;
        //check if matches are mirrored
        if (word1 === reversed) {
            //find how many times we match word

            result.push(`${word1} <=> ${word2}`)
        }
        match = pattern.exec(text);
    }
    //print result
    if (counter === 0) {
        console.log(`No word pairs found!`)
    } else {
        console.log(`${counter} word pairs found!`)
    }
    if (result.length !== 0) {
        console.log('The mirror words are:')
        console.log(result.join(', '))
    } else {
        console.log('No mirror words!')
    }
}

mirrorWords([
        '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
)
