function train(train) {
    let passengersWagons = train.shift().split(" ").map(Number);
    // console.log('Number of passengers of each Wagon: ', passengersWagons);

    let maxCapacity = Number(train.shift());
    // console.log(maxCapacity);
    // console.log('train: ',train);
    for (let command of train) {//each element ot the array
        let currCommand = command.split(' ')
        // console.log(currCommand)
        if (currCommand[0] === "Add") {
            passengersWagons.push(Number(currCommand[1]));
        } else {
            for (let i = 0; i < passengersWagons.length; i++) {
                if(passengersWagons[i]+ Number(currCommand[0]) <= maxCapacity){
                    passengersWagons[i]+=Number(currCommand[0]);
                    break;//break this nested-for-loop
                }
            }
        }
    }
    console.log(passengersWagons.join(' '))
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)

/*train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
)*/
