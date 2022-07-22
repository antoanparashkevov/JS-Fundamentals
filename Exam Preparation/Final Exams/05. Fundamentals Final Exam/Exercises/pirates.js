function pirates(data) {
    let cities = {};
    while (data[0] !== "Sail") {
        let [city, population, gold] = data.shift().split('||');
        population = +population;
        gold = +gold;
        if (!cities.hasOwnProperty(city)) {
            cities[city] = [0, 0];
        }

        cities[city][0] += population
        cities[city][1] += gold

    }
    data.shift()
    // console.log(cities)
    while (data[0] !== "End") {
        let [command, town, p1, p2] = data.shift().split('=>')
        p1 = +p1;
        p2 = +p2;
        if (command === "Plunder") {
            console.log(`${town} plundered! ${p2} gold stolen, ${p1} citizens killed.`)
            if (cities[town][0] - p1 === 0 || cities[town][1] - p2 === 0) {
                delete cities[town]
                console.log(`${town} has been wiped off the map!`)
            }
            if (cities.hasOwnProperty(town)) {
                cities[town][0] -= p1
                cities[town][1] -= p2
            }
        } else if (command === "Prosper") {
            if (p1 < 0) {
                console.log(`Gold added cannot be a negative number!`)
            } else {
                cities[town][1] += p1;
                console.log(`${p1} gold added to the city treasury. ${town} now has ${cities[town][1]} gold.`)
            }
        }
    }
    if (Object.keys(cities).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`)
        Object.keys(cities).forEach(el => {
            console.log(`${el} -> Population: ${cities[el][0]} citizens, Gold: ${cities[el][1]} kg`)
        })
    }else{
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!')
    }


}

pirates(
    ["Tortuga||345000||1250",
        "Santo Domingo||240000||630",
        "Havana||410000||1100",
        "Sail",
        "Plunder=>Tortuga=>75000=>380",
        "Prosper=>Santo Domingo=>180",
        "End"]
)

