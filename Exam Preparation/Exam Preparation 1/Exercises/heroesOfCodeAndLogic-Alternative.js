function heroesOfCodeAndLogicAlternative(data) {
    class Hero {
        constructor([name, hp, mp]) {//because we accept an array (heroData), here we should make destructuring.
            this.name = name;
            this.hp = Number(hp);
            this.mp = Number(mp);

            this.alive = hp > 0;//this is Boolean Expression.

        }

        CastSpell(mp, spellName) {
            if (!this.alive) {
                return
            }
            if (this.mp >= mp) {
                this.mp -= mp;
                console.log(`${this.name} has successfully cast ${spellName} and now has ${this.mp} MP!`)
            } else {
                console.log(`${this.name} does not have enough MP to cast ${spellName}!`)
            }
        }

        TakeDamage(damage, attacker) {
            if (!this.alive) {
                return
            }
            this.hp -= damage;
            if (this.hp <= 0) {
                this.alive = false;//for every function that meet this boolean express to be false, it will return and exit
                console.log(`${this.name} has been killed by ${attacker}!`)
            } else {
                console.log(`${this.name} was hit for ${damage} HP by ${attacker} and now has ${this.hp} HP left!`)
            }

        }

        Recharge(mp) {
            if (!this.alive) {
                return
            }
            //mp is not a reference type of data, we make a copy to this variable and change it with the smallest one.
            mp = Math.min((200 - this.mp), mp);
            //200 - this.mp is the rest mp to the max (200),
            //mp is that variable who is a param of this function

            //if we have 170 mana and we want to charge 50, with Math.min we have -> 200-170 = 30, (30,50) = 30,
            //and we will charge 30 instead of 50 mana
            this.mp += mp;
            console.log(`${this.name} recharged for ${mp} MP!`)

        }

        Heal(hp) {
            if (!this.alive) {
                return
            }
            hp = Math.min(100 - this.hp, hp);
            //if we have 90 hp and we want to charge 50, with Math.min we have -> 100-90 = 10, (10,50) = 10,
            //and we will charge 10 instead of 50 hp
            this.hp += hp;
            console.log(`${this.name} healed for ${hp} HP!`)
        }

        toString() {//this is built-in method of JS, that was called automatically if we try to treat with strings
            return [this.name, `  HP: ${this.hp}`, `  MP: ${this.mp}`].join('\n')
            //this is an array with three elements and we use a symbol \n
            //and with join() we make it to Strings and prints on the new line every time
        }

    }

    // let commands = {
    //     CastSpell,
    //     TakeDamage,
    //     Recharge,
    //     Heal
    // }

    let allHeroes = {};

    let numberOfHeroes = Number(data.shift())

    while (numberOfHeroes > 0) {
        numberOfHeroes--;
        let heroData = data.shift().split(' ');//this is an array of 3 three elements (name,hp,mp)
        let name = heroData[0];
        allHeroes[name] = new Hero(heroData);//creates an object with all heroes through our constructor (our Class Hero)
    }
    // console.log(allHeroes)
    while (data[0] !== "End") {
        let tokens = data.shift().split(' - ')
        let [command, nameOfHero, p1, p2] = tokens
        p1 = Number(p1)
        //we create a variable only for those heroes that we have to change by different set of commands.
        let hero = allHeroes[nameOfHero]//this is an instance of our Class above.
        //In this Class, we have function that we want to call them like this
        hero[command](p1, p2)
        // console.log(hero)
    }

    //when we invoke join() on the array, join() will try explicitly calling toString() method
    //this is Automatically by JavaScript.

    //If we have toString() built-in method where we describe exactly the object we want to treat,
    //and we try to use this object in the context where we change it to a String (with join())
    //join() will call automatically toString()
    console.log(Object.values(allHeroes).filter(heroes=>heroes.alive).join('\n'))
    //with filter() we want to filter all heroes that alive boolean express will return true, not false
    console.log(allHeroes)//this is a whole object
    console.log(Object.values(allHeroes))//this is an array
    console.log(Object.values(allHeroes).join('\n'))//this calls toString()
}

heroesOfCodeAndLogicAlternative(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"]
)
