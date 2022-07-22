function adAstraAlternative([data]) {
    let pattern = /([|#])(?<food>[a-zA-Z\s]+)(\1)(?<expDate>\d{2}\/\d{2}\/\d{2})(\1)(?<calories>\d+)(\1)/g
    // let pattern2 = /(\#|\|)(?<food>[a-zA-Z\s]+)(\1)(?<expDate>\d{2}\/\d{2}\/\d{2})(\1)(?<calories>\d+)(\1)/g
    let total = 0;
    let match = pattern.exec(data);
    let result = []
    while (match !== null) {
        let {food, expDate, calories} = match.groups
        calories = +calories
        total += calories;

        result.push(`Item: ${food}, Best before: ${expDate}, Nutrition: ${calories}`);

        match = pattern.exec(data);
    }
    // console.log(result)
    console.log(`You have food to last you for: ${Math.floor(total / 2000)} days!`);
    console.log(result.join('\n'));
}

adAstraAlternative(
    [
        '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
)

//function adAstra (input) {
//
//     let pattern = /(\#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(-?\d+(?:\.\d+)?)\1/g;
//     let total = 0;
//     let text = input[0];
//     let result = [];
//     let match = pattern.exec(text);
//
//     while (match !== null) {
//         let itemName = match[2];
//         let itemDate = match[3];
//         let calories = Number(match[4]);
//
//         total += calories;
//
//         result.push(`Item: ${itemName}, Best before: ${itemDate}, Nutrition: ${calories}`);
//
//         match = pattern.exec(text);
//     }
//     console.log(`You have food to last you for: ${Math.floor(total / 2000)} days!`);
//     console.log(result.join('\n'));
// }
