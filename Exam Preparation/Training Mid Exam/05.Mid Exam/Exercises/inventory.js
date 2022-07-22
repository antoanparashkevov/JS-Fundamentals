function inventory(input) {
    let inventory = input.shift().split(', ')
    // console.log(inventory)
    // console.log(input.length)



    let index = 0;
    while (input[index] !== "Craft!") {
        let tokens = input[index].split(' - ')
        let command = tokens[0]
        if (command === "Collect") {
            let item = tokens[1];
            if (!inventory.includes(item)) {
                inventory.push(item)
            }
        } else if (command === "Drop") {
            let item = tokens[1];
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item)
                inventory.splice(index, 1)
            }
        } else if (command === "Combine Items") {
            let allItems = tokens[1].split(':')
            // console.log(allItems)
            let oldItem = allItems[0]
            let newItem = allItems[1]
            if (inventory.includes(oldItem)) {
                let index = inventory.indexOf(oldItem)
                inventory.splice(index + 1, 0, newItem)
            }
        } else if (command === "Renew") {
            let item = tokens[1];
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item)
                inventory.splice(index, 1)
                inventory.push(item)
            }
        }
        index++;
    }
    console.log(inventory.join(", "))
}

inventory([
        'Iron, Sword',
        'Drop - Bronze',
        'Combine Items - Sword:Bow',
        'Renew - Iron',
        'Craft!'
    ]
)
