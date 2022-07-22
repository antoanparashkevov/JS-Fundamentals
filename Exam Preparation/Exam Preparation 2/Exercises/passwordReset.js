function passwordReset(data) {
    let currPassword = data.shift()
    // console.log(currPassword)
    let commands = {
        //this function must have to return, not to console.log something.
        'TakeOdd': (pwd) => {
            //will return spread password (an array)
            return [...pwd]
                .filter((symbol, index) => {
                    return index % 2 !== 0
                }).join('');//to back to String type
        },
        'Cut': (pwd, index, length) => {
            index = Number(index);
            length = Number(length);

            const substr = pwd.substring(index, index + length);
            // pwd = pwd.split(substr).join('')//from string to array by removing substr variable, then returns again as a string.
            //OR with replace() method
            return pwd.replace(substr, '')
            // return pwd;
        },
        'Substitute': (pwd, substring, toReplace) => {
            // we can find a solution with Regex, but we have another way to solve the problem
            if (pwd.includes(substring)) {
                let match = new RegExp(substring, 'g')
                pwd = pwd.replace(match, toReplace)
                return pwd;
            } else {
                console.log("Nothing to replace!")
            }
            return pwd//because if Substitute is last command in our input, we want to print the password and we take it .


        }
    };

    data.forEach(line => {
        if (line !== "Done") {
            let [command, ...tokens] = line.split(' ');
            let oldPassword = currPassword;
            currPassword = commands[command](currPassword, ...tokens)
            // console.log(commands[command])
            // console.log(tokens)
            if (oldPassword !== currPassword) {
                console.log(currPassword)
            }
        }

    });
    console.log(`Your password is: ${currPassword}`)
}

passwordReset(
    ["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
        "TakeOdd",
        "Cut 15 3",
        'Substitute :: -',
        "Substitute | ^",
        "Done"]
)
