function secretChatAlternative(data) {
    //take data[0] -> that is the message in the beginning.
    let startingMessage = data.shift();
    // console.log(startingMessage)


    while (data[0] !== "Reveal") {
        //parse commands by :|:
        let tokens = data.shift().split(':|:');
        let name = tokens[0];
        let c1 = tokens[1];
        let c2 = tokens[2];
        if (name === "ChangeAll") {
            // startingMessage = startingMessage.split(c1).join(c2)
            //we split with substring and that removes all occurrences
            //then we join with the new substring (replacement) and that will add new letters.

            //or with regex
            let pattern = new RegExp(c1,'g')
            startingMessage = startingMessage.replace(pattern,c2)
            console.log(startingMessage)
        } else if (name === "InsertSpace") {
            let index = Number(c1)
            let left = startingMessage.slice(0, index);//from 0 to index (exclusive)
            let right = startingMessage.slice(index);//from index (inclusive) to the end

            startingMessage = left + " " + right
            console.log(startingMessage)
        } else {
            let findIndex = startingMessage.indexOf(c1);//from 0 to text.length - 1 and if we haven't match, it will return -1
            if (findIndex !== -1) {
                let leftPart = startingMessage.slice(0, findIndex);
                let rightPart = startingMessage.slice(findIndex + c1.length);
                // console.log(leftPart+rightPart)
                startingMessage = leftPart + rightPart + c1.split('').reverse().join('')
                console.log(startingMessage)

            } else {
                console.log("error")

            }
        }
    }
    console.log(`You have a new text message: ${startingMessage}`)
}

secretChatAlternative([
        'heVVodar!gniV',
        'ChangeAll:|:V:|:l',
        'Reverse:|:!gnil',
        'InsertSpace:|:5',
        'Reveal'
    ]
)
