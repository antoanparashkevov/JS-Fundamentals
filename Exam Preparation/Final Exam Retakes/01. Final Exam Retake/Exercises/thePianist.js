function thePianist(data) {
    let number = +data.shift();
    let pianist = {};
    while (number > 0) {
        number--;
        let [pieces, composer, key] = data.shift().split('|');
        //          'Fur Elise|Beethoven|A Minor',
        //         'Moonlight Sonata|Beethoven|C# Minor',
        //         'Moonlight Sonata|Antoan|C# Minor',
        //         'Clair de Lune|Debussy|C# Minor',
        if (!pianist.hasOwnProperty(pieces)) {//Moonlight Sonata
            pianist[pieces] = {}
        }
        pianist[pieces] = {
            composer,//Antoan
            key// C# Minor
        }
    }
    // console.log(pianist)
    while (data[0] !== 'Stop') {
        let [command, pieces, composer, key] = data.shift().split('|');

        if (command === 'Add') {
            if (!pianist.hasOwnProperty(pieces)) {
                pianist[pieces] = {
                    composer,
                    key
                }
                console.log(`${pieces} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${pieces} is already in the collection!`);
            }
        } else if (command === 'Remove') {
            if (pianist.hasOwnProperty(pieces)) {
                delete pianist[pieces];
                console.log(`Successfully removed ${pieces}!`);
            } else {
                console.log(`Invalid operation! ${pieces} does not exist in the collection.`);
            }
        }else if(command === "ChangeKey"){
            if(pianist.hasOwnProperty(pieces)){
                pianist[pieces].key = composer;
                console.log(`Changed the key of ${pieces} to ${composer}!`)
            }else{
                console.log(`Invalid operation! ${pieces} does not exist in the collection.`)
            }
        }
    }
    //"{Piece} -> Composer: {composer}, Key: {key}"
    let keys = Object.keys(pianist)
    // console.log(keys)
    // for(let key of keys){
    //     console.log(`${key} -> Composer: ${pianist[key].composer}, Key: ${pianist[key].key}`)
    // }
    for(let n in pianist){
        console.log(`${n} -> Composer: ${pianist[n].composer}, Key: ${pianist[n].key}`)
    }
}

thePianist([
        '4',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Moonlight Sonata|Antoan|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
)
