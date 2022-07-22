function messageTranslator(data) {
    let n = +data.shift()
    let pattern = /\!(?<msg>[A-Z][a-z]{2,})\!:\[(?<str>[a-zA-Z]{8,})\]/

    while (n > 0) {
        n--
        let message = data.shift()
        if (pattern.test(message)) {
            // message = message.split('')
            // console.log(message)
            let match = message.match(pattern)
            // let pattern2 = /[a-zA-Z]/g
            // let lettersToCharCode = message.match(pattern2)
            let str = match.groups.str
            str = str.split('')
            // console.log(str)
             message = str.map(el=> {
                return el.charCodeAt(0)
            })
            console.log(`${match.groups.msg}:`,message.join(' '))
        } else {
            console.log(`The message is invalid`)
        }
    }
}

messageTranslator(["2",
    "!Send!:[IvanisHere]",
    "*Time@:[Itis5amAlready"])

