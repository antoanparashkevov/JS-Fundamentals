function arenaTier2(data) {
    let objects = {}

    function objectOperation(object, name, technique, skill) {
        if (object.hasOwnProperty(name) === false) {
            object[name] = {};
            object[name][technique] = Number(skill)
        } else {//if we already have this gladiator
            if (object[name].hasOwnProperty(technique) === false) {//but we don't have this technique
                object[name][technique] = Number(skill)
            } else {
                if (object[name][technique] < Number(skill)) {
                    object[name][technique] = Number(skill)
                }
            }

        }
    }

    function fightOperation(object, gladiator1, gladiator2) {
        if (object.hasOwnProperty(gladiator1) && object.hasOwnProperty(gladiator2)) {
            let gladiator1Techniques = Object.keys(object[gladiator1])
            let gladiator2Techniques = Object.keys(object[gladiator2])
            let commonTechniques = gladiator1Techniques.find(technique => gladiator2Techniques.includes(technique))
            if (commonTechniques !== undefined) {
                //todo pvpMap function which describe better gladiator with better skill points
                pvpMap[object[gladiator1][commonTechniques] > object[gladiator2][commonTechniques]]
                (object, gladiator1, gladiator2)//it accept arguments because every property of this object pvpMap is anonymous function
            }
        }
    }

    const pvpMap = {
        //if it returns true, second gladiator die and first gladiator wins
        true: (object, _, gladiator2) => {
            delete object[gladiator2]
        },
        //if it returns false, second gladiator wins and first gladiator die
        false: (object, gladiator1, _) => {
            delete object[gladiator1]
        },
    }
    const commandsMap = {//this object is used when we loop through the input data and it accept two properties
        //first property is true and that is when we meet first format ( -> )
        //second property is false and that is when we meet second format ( vs )
        false: (string, object) => {
            let [name, technique, skill] = string.split(' -> ')
            objectOperation(object, name, technique, skill)
        },
        true: (string, object) => {
            let [gladiator1, gladiator2] = string.split(' vs ')
            fightOperation(object, gladiator1, gladiator2)
        }

    }
    //todo sorting by points and names and by skills. Find totalPoints for each gladiator and sort foreach gladiator their skills
    const sortByPointsAndName = (a, b) =>
        Object.values(b[1]).reduce((a, b) => a + b)
        -
        Object.values(a[1]).reduce((a, b) => a + b)
        ||
        a[0].localeCompare(b[0]);
    const sortBySkills = (a, b) =>
        b[1] - a[1]
        ||
        a[0].localeCompare(b[0]);
    const skillsParse = ([key, value] = e) => `- ${key} <!> ${value}`
    const outputParse = ([name, technique] = e) => {
        let totalPoints = Object.values(technique).reduce((a, b) => a + b);
        let sortedSkills =
            Object.entries(technique)
                .sort(sortBySkills)
                .map(skillsParse)
                .join('\n')
        return `${name}: ${totalPoints} skill\n${sortedSkills}`
    }
    while (data[0] !== "Ave Cesar") {
        let line = data.shift();
        commandsMap[line.includes('vs')](line, objects)
    }


    return Object.entries(objects)
        .sort(sortByPointsAndName)
        .map(outputParse)
        .join('\n')
}

console.log(
    arenaTier2([
        "Peter -> BattleCry -> 400",
        "Alex -> PowerPunch -> 300",
        "Stefan -> Duck -> 200",
        "Stefan -> Tiger -> 250",
        "Ave Cesar",
    ])
);
