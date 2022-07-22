function emojiDetector([data]) {
    let patternForEmoji = /(::|\*\*)[A-Z][a-z]{2,}(\1)/g
    //calculate cool threshold (digit regex)
    let threshold = 1;
    let coolEmojis = []
    let digits = data.match(/\d/g).map(Number);
    // console.log(digits)
    for(let digit of digits){
        threshold*=digit
    }
    //extract all valid emojis
    let emojis = data.match(patternForEmoji)
    // console.log(emojis)
        if(emojis!==null){
            //for each emoji
            for(let emoji of emojis){
                //-calculate coolness
                let coolness = 0;
                let chars = emoji.slice(2,-2)
                for(let char of chars){
                    coolness+=char.charCodeAt(0)
                }
                // console.log(coolness)

                //-if above boundary, add it to final result
                if(coolness>=threshold){
                    coolEmojis.push(emoji)
                }
            }
        }

    console.log(`Cool threshold: ${threshold}`)
    console.log(`${emojis? emojis.length : 0} emojis found in the text. The cool ones are:`)
   for(let cool of coolEmojis){
       console.log(cool)
   }

}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
