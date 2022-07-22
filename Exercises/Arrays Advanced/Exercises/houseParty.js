function houseParty(list) {
    let listWithPeople = [];
    for (let i = 0; i < list.length; i++) {
        let command = list[i].split(' ');
        // console.log(command);
        let personName = command[0];
        // console.log(personName);
        if (command.length === 3) {
            let isThere = listWithPeople.includes(personName);
            if (!isThere) {
                listWithPeople.push(personName);
            } else {
                console.log(`${personName} is already in the list!`)
            }
        } else {
            let indexOfPerson = listWithPeople.indexOf(personName)//this will return the index of this people
            if (indexOfPerson !== -1) {//because that is the default value when it is not in the list
                listWithPeople.splice(indexOfPerson, 1);
            } else {
                console.log(`${personName} is not in the list!`)
            }

        }

    }
    console.log(listWithPeople.join('\n'))// /n is known as new line
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)
