function needForSpeed(data) {
    let numberOfCars = +data.shift();
    let cars = {};
    while (numberOfCars > 0) {
        numberOfCars--;
        let [brand, mileage, fuel] = data.shift().split('|');
        mileage = +mileage;
        fuel = +fuel;
        if (!cars.hasOwnProperty(brand)) {
            cars[brand] = []
        }
        cars[brand].push(mileage, fuel)
    }
    while (data[0] !== "Stop") {
        let [command, brand, p1, p2] = data.shift().split(' : ');
        p1 = +p1;
        p2 = +p2;
        if (command === "Drive") {
            if (cars[brand][1] < p2) {
                console.log('Not enough fuel to make that ride')
            } else {
                cars[brand][0] += p1;
                cars[brand][1] -= p2;
                console.log(`${brand} driven for ${p1} kilometers. ${p2} liters of fuel consumed.`)
                if (cars[brand][0] >= 100000) {
                    console.log(`Time to sell the ${brand}!`)
                    delete cars[brand]
                }
            }
        } else if (command === "Refuel") {
            if (cars[brand][1] + p1 > 75) {//50, 30 = 80 > 75 (25)
                p1 = 75 - cars[brand][1]
                cars[brand][1] = 75
            } else {
                cars[brand][1] += p1
            }
            console.log(`${brand} refueled with ${p1} liters`)
        } else if (command === "Revert") {
            cars[brand][0] -= p1;
            if (cars[brand][0] <= 10000) {
                cars[brand][0] = 10000
            } else {
                console.log(`${brand} mileage decreased by ${p1} kilometers`)
            }

        }
    }

    // console.log(cars)
    for (let brand in cars) {
        console.log(`${brand} -> Mileage: ${cars[brand][0]} kms, Fuel in the tank: ${cars[brand][1]} lt.`)
    }
}

// needForSpeed([
//         '3',
//         'Audi A6|38000|62',
//         'Mercedes CLS|11000|35',
//         'Volkswagen Passat CC|45678|5',
//         'Drive : Audi A6 : 543 : 47',
//         'Drive : Mercedes CLS : 94 : 11',
//         'Drive : Volkswagen Passat CC : 69 : 8',
//         'Refuel : Audi A6 : 50',
//         'Revert : Mercedes CLS : 500',
//         'Revert : Audi A6 : 30000',
//         'Stop'
//     ]
// )
needForSpeed([
        '4',
        'Lamborghini Veneno|11111|74',
        'Bugatti Veyron|12345|67',
        'Koenigsegg CCXR|67890|12',
        'Aston Martin Valkryie|99900|50',
        'Drive : Koenigsegg CCXR : 382 : 82',
        'Drive : Aston Martin Valkryie : 99 : 23',
        'Drive : Aston Martin Valkryie : 2 : 1',
        'Refuel : Lamborghini Veneno : 40',
        'Revert : Bugatti Veyron : 2000',
        'Stop'
    ]
)
