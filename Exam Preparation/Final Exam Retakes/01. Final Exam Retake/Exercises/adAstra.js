function adAstra([data]) {
    let pattern = /([|#])(?<food>[a-zA-Z\s]+)(\1)(?<expDate>\d{2}\/\d{2}\/\d{2})(\1)(?<calories>\d+)(\1)/g
    let match = pattern.exec(data);
    // console.log(match)
    let foodObject = {}
    while (match !== null) {
        // console.log(match)
        // let expDate = match[4]
        // let calories = match[6]
        // foodObject[match[2]] = {
        //     expDate: match[4],
        //     calories: match[6]
        // }
        // console.log(expDate,calories)
        let {food, expDate, calories} = match.groups
        // console.log(food,expDate,calories)
        foodObject[food] = {
            expDate,
            calories
        }
        match = pattern.exec(data);
    }
    // console.log(foodObject)
    let sum = 0
    for (let key in foodObject) {
        // let eachFood = Object.keys(key)

        sum += +foodObject[key].calories

    }
    // console.log(sum)
    let dayCounters = sum / 2000;
    // console.log(Math.floor(dayCounters))
    console.log(`You have food to last you for: ${Math.floor(dayCounters)} days!`)
    for(let key in foodObject){
        console.log(`Item: ${key}, Best before: ${foodObject[key].expDate}, Nutrition: ${foodObject[key].calories}`)
    }

}

adAstra(
    [
        '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
)
