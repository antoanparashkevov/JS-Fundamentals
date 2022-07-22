function secretChat(data) {
    let commands = {
        InsertSpace,
        Reverse,
        ChangeAll
    }
    //take data[0] -> that is the message in the beginning.
    let startingMessage = data.shift();
    // console.log(startingMessage)

    while (data[0] !== "Reveal") {
        //parse commands by :|:
        let tokens = data.shift().split(':|:');
        let name = tokens[0];
        let c1 = tokens[1];
        let c2 = tokens[2]
        let command = commands[name]
        // if(commands[] === "ChangeAll"){
        //
        // }else if(command === "Reverse"){
        //
        // }else{
        //
        // }
        startingMessage = command(startingMessage, c1, c2)

    }

    //until we meet "Reveal", print the result message.
    console.log(`You have a new text message: ${startingMessage}`)


    function InsertSpace(text, index) {
        //InsertSpace
        //on the current index,
        //split the string into two parts and add space between these two parts. Next, concat everything

        let left = text.slice(0, index);//from 0 to index (exclusive)
        let right = text.slice(index);//from index (inclusive) to the end
        // console.log(left,right)
        let result = left + " " + right
        console.log(result)
        return result;

    }

    function Reverse(text, substring) {
        //Reverse
        //find the the location of the substring, reverse it and concat it with the new message at the end of it.
        //otherwise, print error message.
        let findIndex = text.indexOf(substring);//from 0 to text.length - 1 and if we haven't match, it will return -1
        if (findIndex !== -1) {
            let leftPart = text.slice(0, findIndex);
            let rightPart = text.slice(findIndex + substring.length);
            // console.log(leftPart+rightPart)
            let result = leftPart + rightPart + substring.split('').reverse().join('')
            console.log(result)
            return result

        } else {
            console.log("error")
            return text;
        }
    }

    function ChangeAll(text, substring, replacement) {
        //ChangeAll
        //Find all occurrences of the letter (word), and replace it with the given one
        let result = text.split(substring).join(replacement)//we split with substring and that removes all occurrences
        //then we join with the new substring (replacement) and that will add new letters.
        console.log(result)
        return result
    }

// InsertSpace('antoan','a','v');
//
// Reverse("avcHELLOdef","HELLO")
//
// ChangeAll('hellodarling!', 5)
}

secretChat
([
        'heVVodar!gniV',
        'ChangeAll:|:V:|:l',
        'Reverse:|:!gnil',
        'InsertSpace:|:5',
        'Reveal'
    ]
)
