function race(array) {
    let arrOfPersons = array.shift().split(', ');
    let racers = {};
    for(let name of arrOfPersons){
        racers[name] = 0;
    }
    // console.log(arrOfPersons)
    let namePattern = /[a-zA-Z]/g;
    let distancePattern = /\d/g
    while (array[0] !== "end of race") {
        let line = array.shift()
        let letters = line.match(namePattern);
        let digits = line.match(distancePattern);
        let name = letters.join('')
        let totalDistance = digits.map(Number).reduce((a,b)=>a+b)
        // console.log(totalDistance)
        if(racers.hasOwnProperty(name)){
            racers[name] += totalDistance;
        }
    }
    // console.log(racers)
    let result = Object.entries(racers).sort((a,b)=>b[1]-a[1]).slice(0,3)
    // console.log(result)
    let index = 1;
    for(let [name,distance] of result){
        if(index === 1){
            console.log(`${index}st place: ${name}`)
        }else if(index === 2){
            console.log(`${index}nd place: ${name}`)
        }else{
            console.log(`${index}rd place: ${name}`)
        }

        index++
    }
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)
