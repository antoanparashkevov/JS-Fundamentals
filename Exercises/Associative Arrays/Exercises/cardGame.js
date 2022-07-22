function cardGame(input) {
    //initialize power multipliers
    let suits = {
        "C":1,
        "D":2,
        "H":3,
        "S":4
    }
    let faces = {
        "1":10,
        "2":2,
        "3":3,
        "4":4,
        "5":5,
        "6":6,
        "7":7,
        "8":8,
        "9":9,
       "J":11,
        "Q":12,
        "K":13,
        "A":14
    }
    // create collection
    let persons = {};
    //for every element of input
    for (let line of input) {
        // - parse element
        let [name, cards] = line.split(': ')
        cards = cards.split(', ')
        // - store in collection
        // -- if person is not recorded, create new Set
        if (!persons.hasOwnProperty(name)) {
            persons[name] = new Set();// new set like value of property name
        }
        // -- add new cards to Person's Set
        for (let card of cards) {

            persons[name].add(card)//only non-repeatable cards can join into Set and that is the condition of this exercise
        }


    }
    // console.log(persons)


    //for every entry in the collection
    let entries = Object.entries(persons)
    for(let [person,cards] of entries){
        // - for every card in entry
        // -- calculate power
        let power = 0;
        for(let card of cards){
           let facePower = faces[card[0]];
           let suitPower = suits[card.slice(-1)];
          power +=facePower*suitPower
        }
        // - print name and total power
        console.log(`${person}: ${power}`)
    }

}

cardGame
([
        'Peter: 2C, 4H, 9H, AS, QS',
        'Tomas: 3H, 10S, JC, KD, 5S, 10S',
        'Andrea: QH, QC, QS, QD',
        'Tomas: 6H, 7S, KC, KD, 5S, 10C',
        'Andrea: QH, QC, JS, JD, JC',
        'Peter: JD, JD, JD, JD, JD, JD'
    ]
)
