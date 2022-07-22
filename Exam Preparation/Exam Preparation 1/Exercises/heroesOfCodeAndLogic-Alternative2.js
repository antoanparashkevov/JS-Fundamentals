function heroesOfCodeAndLogicAlternative2(data) {
    let commands = {
        CastSpell,
        Heal,
        Recharge,
        TakeDamage
    }
    let n = Number(data.shift())
    let heroes = {}
    // console.log("Number of Heroes:",numberOfHeroes)
    for (let i = 0; i < n; i++) {
        let heroData = data.shift().split(' ');
        // console.log(heroData)
        let [name, hp, mp] = heroData
        // console.log(name)
        hp = Number(hp);
        mp = Number(mp);
        //the key is 'name', the value is an object
        heroes[name] = {
            hp,
            mp
        };
    }
    // console.log(heroes)
    // console.log(data)
    while (data[0] !== "End") {
        let tokens = data.shift().split(' - ')
        let [command, nameOfHero, p1, p2] = tokens
        p1 = Number(p1);
        // console.log(nameOfHero)
        let hero = heroes[nameOfHero];
        // console.log(nameOfHero,hero)
       commands[command](hero,nameOfHero,p1,p2)
        // console.log(Object.entries(heroes))//array of arrays and for each array we have key for index 0 and value for index 1
    }
    for (let [name, value] of Object.entries(heroes)) {
        console.log(name)
        console.log(`  HP: ${value.hp}`)
        console.log(`  MP: ${value.mp}`)
    }
}

heroesOfCodeAndLogicAlternative2(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"]
)

function CastSpell(hero, p1, nameOfHero, p2) {
    if (hero.mp >= p1) {
        hero.mp -= p1;
        console.log(`${nameOfHero} has successfully cast ${p2} and now has ${hero.mp} MP!`)
    } else {
        console.log(`${nameOfHero} does not have enough MP to cast ${p2}!`)
    }
}

function TakeDamage(hero, nameOfHero, p1, p2) {
    hero.hp -= p1;
    if (hero.hp <= 0) {
        delete heroes[nameOfHero];
        console.log(`${nameOfHero} has been killed by ${p2}!`)
    } else {
        console.log(`${nameOfHero} was hit for ${p1} HP by ${p2} and now has ${hero.hp} HP left!`)
    }
}

function Recharge(hero, nameOfHero, p1) {
    let mp = Math.min(200 - hero.mp, p1);
    //if we have 170 mana and we want to charge 50, with Math.min we have -> 200-170 = 30, (30,50) = 30,
    //and we will charge 30 instead of 50 mana
    hero.mp += mp;
    console.log(`${nameOfHero} recharged for ${mp} MP!`)
}

function Heal(hero, nameOfHero, p1) {
    let hp = Math.min(100 - hero.hp, p1);
    //if we have 90 hp and we want to charge 50, with Math.min we have -> 100-90 = 10, (10,50) = 10,
    //and we will charge 10 instead of 50 hp
    hero.hp += hp;
    console.log(`${nameOfHero} healed for ${hp} HP!`)
}
