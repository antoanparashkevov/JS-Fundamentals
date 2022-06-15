function dungeonestDark(arr) {
    let rooms = arr[0].split('|');
    //this removes | sign from our string and this is the sign to divide elements in the new array

    let health = 100;
    let coins = 0;
    let isSurvived = true;

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(' ');

        if (room[0] === "potion") {
            if (health < 100) {
                let overHealth = health + Number(room[1])
                if (overHealth > 100) {
                    let remainingHealth = overHealth - 100;
                    let totalHealth = Number(room[1]) - remainingHealth
                    console.log(`You healed for ${Number(totalHealth)} hp.`);
                    health = 100;
                }else{
                    health += Number(room[1]);
                    console.log(`You healed for ${Number(room[1])} hp.`);
                }
                console.log(`Current health: ${health} hp.`)
            }
        } else if (room[0] === "chest") {
            console.log(`You found ${Number(room[1])} coins.`)
            coins += Number(room[1]);
        } else {
            let currentMonster = room[0];
            let currentAttack = Number(room[1])
            if (health > currentAttack) {
                console.log(`You slayed ${currentMonster}.`);
                health -= currentAttack
            } else {
                isSurvived = false;
                console.log(`You died! Killed by ${currentMonster}.`)
                console.log(`Best room: ${i + 1}`);
            }
        }
        if (!isSurvived) {
            break;
        }
        if(i === rooms.length -1 && health>0){
            console.log(`You've made it!`);
            console.log(`Coins: ${coins}`);
            console.log(`Health: ${health}`);
        }
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
