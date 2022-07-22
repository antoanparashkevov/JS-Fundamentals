function furniture(input) {
    let pattern = /^>>(?<name>[a-zA-Z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)$/
    //parse input until find Purchase line
    let furniture = []
    let total = 0;

    //for each line check regex pattern
    while (input[0] !== "Purchase") {
        let line = input.shift()
        // console.log(line)
        let match = pattern.exec(line)
        //- if match store furniture and add cost to total
        if (match !== null) {
            //destructuring an object
            let {name, price, qty} = match.groups
            price = +price
            qty = +qty
            total+=price*qty;
            furniture.push(name)
        }
        // console.log(match)

    }

    //print result
    console.log('Bought furniture:')
    for(let item of furniture){
        console.log(item)
    }
    // console.log(furniture.join('\n'))
    console.log(`Total money spend: ${total.toFixed(2)}`)
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])
