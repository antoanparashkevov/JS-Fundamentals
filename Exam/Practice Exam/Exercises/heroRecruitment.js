function heroRecruitment(data) {
    let heroes = {}
    while (data[0] !== "End") {
        let [command, heroName, spell] = data.shift().split(' ')
        // console.log(command)
        if (command === "Enroll") {
            if (heroes.hasOwnProperty(heroName) === false) {
                heroes[heroName] = []
                // console.log(heroes[heroName])
            } else {
                console.log(`${heroName} is already enrolled.`)
            }
        } else if (command === 'Learn') {
            if (heroes.hasOwnProperty(heroName) === false) {
                console.log(`${heroName} doesn't exist.`)
            } else {
                if (heroes[heroName].includes(spell)) {
                    console.log(`${heroName} has already learnt ${spell}.`)
                } else {
                    heroes[heroName].push(spell)
                }
            }
        } else if (command === "Unlearn") {
            if (heroes.hasOwnProperty(heroName) === false) {
                console.log(`${heroName} doesn't exist.`)
            } else {
                if (heroes[heroName].includes(spell) === false) {
                    console.log(`${heroName} doesn't know ${spell}.`)
                } else {
                    let index = heroes[heroName].indexOf(spell)
                    heroes[heroName].splice(index, 1)
                }
            }
        }
    }
    // console.log(heroes['Stefan'].length)
    // console.log(heroes['Stefan'])
    // console.log(heroes)
    console.log('Heroes:')
    for (let [hero, array] of Object.entries(heroes)) {
        console.log(`== ${hero}: ${array.join(', ')}`)
    }
}

heroRecruitment(['Enroll Stefan',
    'Enroll Peter',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn John ItShouldNotWork',
    'Unlearn George Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
])
