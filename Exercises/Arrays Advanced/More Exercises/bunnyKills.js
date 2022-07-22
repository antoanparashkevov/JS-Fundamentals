function bunnyKills(array) {
    let bombsCoordinates = array.pop().split(' ')//removes last string and make it in array
    console.log(bombsCoordinates)
    let totalDamage = 0;
    let kills = 0;
    // console.log(array)
    let hangar = array.map(stringElement => stringElement.split(' ').map(Number))
    // console.log(hangar)
    for (let i = 0; i < bombsCoordinates.length; i++) {
        let rowTargetIndex = Number(bombsCoordinates[i].split(',')[0])
        let colTargetIndex = Number(bombsCoordinates[i].split(',')[1])
        // console.log(rowTargetIndex)
        // console.log(hangar[rowTargetIndex][colTargetIndex])
        // console.log(colTargetIndex)
        let damage = hangar[rowTargetIndex][colTargetIndex];
        if (damage <= 0) {
            continue;
        }
        //because we always will have matrix 5x5, we are going to loop from 0 to 3 (excluded)
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                let currentRow = rowTargetIndex - 1 + row;
                let currentColumn = colTargetIndex - 1 + col;
                if (currentRow >= 0 && currentColumn >= 0) {
                    if (hangar[currentRow] !== undefined && hangar[currentRow][currentColumn] !== undefined) {
                        hangar[currentRow][currentColumn] -= damage;

                        if (currentRow === rowTargetIndex && currentColumn === colTargetIndex) {
                            kills++
                            totalDamage += damage
                        }
                        if (hangar[currentRow][currentColumn] < 0) {
                            hangar[currentRow][currentColumn] = 0;
                        }
                    }
                    // console.log(currentRow)
                    // console.log(currentColumn)
                }
            }
        }
    }
    // console.log(totalDamage)
    hangar.forEach(array => {
        totalDamage += array.reduce((a, b) => a + b);
        kills += array.filter(element => element !== 0).length;
    })
    console.log(totalDamage)
    console.log(kills)
}

bunnyKills(
    [
        '5 10 15 20',
        '10 10 10 10',
        '10 15 10 10',
        '10 10 10 10',
        '2,2 0,1']
)
