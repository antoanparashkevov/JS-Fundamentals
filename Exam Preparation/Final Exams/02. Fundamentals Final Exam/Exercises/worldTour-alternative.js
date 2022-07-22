function worldTourAlternative(data) {
    let initialString = data.shift()
    while (data[0] !== "Travel") {
        let [command, p1, p2] = data.shift().split(':');
        let commandToDo = command.split(' ')[0]
        // console.log(p2)

        // console.log(commandToDo.trim())
        if (commandToDo === "Add") {//add to the given index, a string from p2
            p1 = +p1;
            if (p1 >= 0 && p1 < initialString.length) {
                // initialString = initialString.split('')//array
                // initialString.splice(p1, 0, p2)//
                // initialString = initialString.join('')//string
                let leftPart = initialString.substring(0, p1);//from 0 index to 7 index (exclusive)
                let rightPart = initialString.substring(p1)//from 7 to the end
                initialString = leftPart + p2 + rightPart
                console.log(initialString)
            }else{
                console.log(initialString)
            }
        } else if (commandToDo === "Remove") {
            p1 = +p1;
            p2 = +p2;
            if (p1 >= 0 && p1 < initialString.length && p2 >= 0 && p2 < initialString.length && p1 <= p2) {
                let toRemove = initialString.slice(p1, p2 + 1)
                // console.log(toRemove)
                initialString = initialString.replace(toRemove, '')
                console.log(initialString)
            }else{
                console.log(initialString)
            }
        } else if (commandToDo === "Switch") {
            if (initialString.includes(p1.trim())) {
                let pattern = new RegExp(p1, 'g');
                initialString = initialString.replace(pattern, p2.trim())
                console.log(initialString)
            } else {
                console.log(initialString)
            }
        }
    }
    console.log(`Ready for world tour! Planned stops: ${initialString}`)
}

worldTourAlternative(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]
)
