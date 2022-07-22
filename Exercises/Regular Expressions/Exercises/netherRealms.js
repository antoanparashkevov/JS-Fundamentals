function netherRealms(data) {

    let redundantSpaces = /\s*,\s*/g
    data = data.split(redundantSpaces)
    // console.log(data)
    let findLettersPattern = /[a-zA-Z]/g
    let object = {}
    while (data.length > 0) {
        let hero = data.shift()
        let matchLetters = hero.match(findLettersPattern)
        let sumHealth = 0;
        matchLetters.forEach(letter => {
            sumHealth += letter.charCodeAt(0)

        })
        let findDigitsPattern = /[+-]?[0-9](?:\.[0-9])?/g
        let sumDamage = 0;
        let matchDigits = hero.match(findDigitsPattern)
        if (matchDigits === null) {
            sumDamage = "0.00"
        } else {
            matchDigits = matchDigits.map(Number)
            sumDamage = matchDigits.reduce((a, b) => a + b);
            let findSignsPattern = /(?<signs>[*\/])/g
            let matchSigns = hero.match(findSignsPattern)
            for (let match of matchSigns) {
                if (match === "*") {
                    sumDamage *= 2
                } else if (match === "/") {
                    sumDamage /= 2
                }
            }
            sumDamage = sumDamage.toFixed(2)
        }
        if (!object.hasOwnProperty(hero)) {
            object[hero] = []
        }
        object[hero].push({
            health: sumHealth,
            damage: sumDamage,
        });
    }

    //"{demon name} - {health points} health, {damage points} damage
    let sortedByName = Object.keys(object).sort((a,b)=>a.localeCompare(b))
    sortedByName.forEach(hero=>{
       console.log(`${hero} - ${object[hero][0].health} health, ${object[hero][0].damage} damage`)
    })
    // console.log(sortedByName)
    // console.log(object)
}

netherRealms('M3ph-0.5s-0.5t0.0**')
netherRealms('M3ph1st0**,      Azazel')
