function softUniBarIncome(data){
//     let firstPattern = /%([A-Z][a-z]*)%/g
//     let secondPattern = /<\w+>/g
//     let thirdPattern = /\|\d+|\|/g
//     let fourthPattern = /(\d+(?:\.\d+)*\$)/g
    let pattern = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/
    let total = 0;
    while(data[0]!=="end of shift"){
        let line = data.shift()

        let match = pattern.exec(line)
        if(match!== null){
            let [_,name,product,quantity,price] = match;
            quantity = +quantity;
            price = +price
            total+=price*quantity
            console.log(`${name}: ${product} - ${(price*quantity).toFixed(2)}`)
        }
        // console.log(match)
    }
    console.log("Total income:", total.toFixed(2))

}
softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']
)
