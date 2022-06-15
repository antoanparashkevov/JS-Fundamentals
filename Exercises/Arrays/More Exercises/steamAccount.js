function steamAccount(input) {
    //split is a method who transform string element to array with elements that is separated with comma (split(' '))
    let games = input[0].split(' ');//we take the first element of our input and split it with comma
    console.log(games);
    for (let i = 1; i < input.length; i++) {//we start from index 1,because on index 0, we have our games there.
        let currentElement = input[i].split(' ');//Install LoL
        let command = currentElement[0];//Install
        let game = currentElement[1];//Lol
        if (command === "Play!") {
            break;//because we want to finish the whole exercises when we meet with Play! string.
            //we put others in else if because if we meet with Play!, break operator will stop others else if
        } else if (command === "Install") {
            let counter = false;//some flag
            for (let i = 0; i < games.length; i++) {
                if (games[i] === game) {
                    counter = true
                    break;
                }
            }
            if (counter === false) {
                games.push(game);//push the element to the last position
            }
        } else if (command === "Uninstall") {
            for (let j = 0; j < games.length; j++) {
                if (games[j] === game) {
                    games.splice(j, 1);//we delete the current element that we are on the loop and we meet with game
                    break;
                }
            }
        } else if (command === "Update") {
            for (let i = 0; i < games.length; i++) {
                if (games[i] === game) {
                    games.splice(i, 1);//deleting the game on the current spot
                    games.push(game);//putting the same game on the last position
                }
            }
        } else if (command === "Expansion") {
            let expansion = game.split('-')//we make an array and - is the symbol that we separate the arrays elements
            for (let j = 0; j < games.length; j++) {
                if (games[j] === expansion[0]) {
                    let expandedGame = expansion.join(':');
                    games.splice(j + 1, 0, expandedGame);
                    break;
                }
            }
        }
    }
    console.log(games.join(' '));
}

steamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
)
