function parseCats(catsAsString) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }

    }
    let cats = [];
    for (let catAsString of catsAsString) {
        let [name, age] = catAsString.split(' ')
        let cat = new Cat(name, age)
        console.log(`Individual cat: `, cat)
        cats.push(cat)
    }
    console.log(`All cats: `, cats)
    for (let cat of cats) {
        cat.meow()//this will print the console log from method meow
    }
}

parseCats(['Mellow 2', 'Tom 5'])

// let someCat = new Cat('Fluffy', 3);
// console.log(someCat)
// someCat.meow()
