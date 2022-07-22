function starEnigmaAlternative(data) {
    let number = data.shift();
    let decryptedMessages = [];
    while (number > 0) {
        number--;
        let encryptedMessage = data.shift()
        let pattern = /[sSTtaArR]/g;
        if (pattern.test(encryptedMessage) !== false) {
            let key = encryptedMessage.match(pattern).length
            let decryptedMessage = '';
            for (let char of encryptedMessage) {
                let charCode = char.charCodeAt() - key
                decryptedMessage += String.fromCharCode(charCode)//from ASCII code to symbol
            }
            // console.log(decryptedMessage)
            decryptedMessages.push(decryptedMessage)
        }else{
            decryptedMessages.push(encryptedMessage)
        }
    }
    let attackedPlanets = [];
    let destroyedPlanets = [];
    // console.log(decryptedMessages)
    for (let decryptedMessage of decryptedMessages) {
        let pattern = /@(?<planetName>[a-zA-Z]+)[^@\-!:>]*:(?<population>[\d]+)[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->(?<soldierCount>[\d]+)/g
        //between each group it has may to have all characters except '@', '-', '!', ':' and '>'
        let matchDecryptedMessage = pattern.exec(decryptedMessage)

        if (matchDecryptedMessage !== null) {
            if (matchDecryptedMessage.groups.attackType === "D") {
                destroyedPlanets.push(matchDecryptedMessage.groups.planetName)
            }else{
                attackedPlanets.push(matchDecryptedMessage.groups.planetName)
            }
        }
        // console.log(matchDecryptedMessage)
    }

    console.log(`Attacked planets: ${attackedPlanets.length}`)
    attackedPlanets.sort((a,b)=>a.localeCompare(b))
    for(let planet of attackedPlanets){
        console.log(`-> ${planet}`)
    }
    console.log(`Destroyed planets: ${destroyedPlanets.length}`)
    destroyedPlanets.sort((a,b)=>a.localeCompare(b))
    for(let planet of destroyedPlanets){
        console.log(`-> ${planet}`)
    }
}

starEnigmaAlternative(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']
)
