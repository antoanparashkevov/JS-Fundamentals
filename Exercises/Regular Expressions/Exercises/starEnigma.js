function starEnigma(data) {
    let counterB = 1;
    let numberOfMessages = +data.shift()
    // console.log(numberOfMessages)
    let attackArray = []
    let destructionArray = [];
    let decryptedMessages = [];
    while (numberOfMessages > 0) {
        let decrypted = ''
        numberOfMessages--;
        let encryptedMessage = data.shift();
        let match = encryptedMessage.match(/[sStTaArR]/g)
        let counter = match.length
        // console.log(counter)

        for (let i = 0; i < encryptedMessage.length; i++) {
            let oldCodeFromTable = encryptedMessage.charCodeAt(i)
            let newCode = oldCodeFromTable - counter
            decrypted += String.fromCharCode(newCode)//we take from ascii code a letter and concat it every iteration

        }
        decryptedMessages.push(decrypted)
        // let startIndexOfPlanet = decrypted.indexOf('@')
        // let endIndexOfPlanet = decrypted.indexOf(':')
        // let planet = decrypted.substring(startIndexOfPlanet+1, endIndexOfPlanet)
        // let startIndexOfPopulation = endIndexOfPlanet;
        // let endIndexOfPopulation =decrypted.indexOf('!')
        // let population = decrypted.substring(startIndexOfPopulation+1,endIndexOfPopulation)
        // console.log(population)

        // console.log(matchSoldierCount)

    }
    while (decryptedMessages.length > 0) {
        let newVar = decryptedMessages.shift()
        let planetNamePattern = /@([a-zA-Z]+)/
        let matchPlanet = newVar.match(planetNamePattern)[1]
        // console.log(matchPlanet)
        let planetPopulationPattern = /:([0-9]+)/
        let matchPlanetPopulation = +newVar.match(planetPopulationPattern)[1]
        // console.log(matchPlanetPopulation)
        let attackTypePattern = /!([AD])!/
        let matchAttackType = newVar.match(attackTypePattern)[1]
        if (matchAttackType === "A") {
            attackArray.push(matchPlanet)
        } else if (matchAttackType === "D") {
            destructionArray.push(matchPlanet)
        }
        // console.log(matchAttackType)
        let soldierCountPattern = /->([0-9]+)/
        let matchSoldierCount = +newVar.match(soldierCountPattern)[1]
    while(newVar.match(planetNamePattern) !== null && newVar.match(planetPopulationPattern)!== null && newVar.match(attackTypePattern) !== null && newVar.match(soldierCountPattern) !==null){
        if (matchPlanet !== undefined && matchAttackType !== undefined && matchSoldierCount !== undefined && matchPlanetPopulation !== undefined && counterB === 2) {
            console.log(`Attacked planets: ${attackArray.length}`)
            console.log(`-> ${attackArray.sort((a, b) => a.localeCompare(b)).join('\n')}`)
            console.log(`Destroyed planets: ${destructionArray.length}`)
            console.log(`-> ${destructionArray.sort((a, b) => a.localeCompare(b)).join('\n')}`)

            counterB++
        }
    }



    }


}

starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']
)
