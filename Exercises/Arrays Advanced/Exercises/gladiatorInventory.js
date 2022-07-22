function gladiatorInventory(arr) {
    let inventory = arr[0].split(' ');

    for (let i = 1; i < arr.length; i++) {
        let text = arr[i].split(' ');
        let command = text[0]
        if (command === "Buy") {
            let equipment = text[1];
            if (!inventory.includes(equipment)) {
                inventory.push(equipment)
            }
        } else if (command === "Trash") {
            let equipment = text[1];
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment)
                inventory.splice(index, 1)
            }
        } else if (command === "Repair") {
            let equipment = text[1];
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment)
                inventory.splice(index, 1)
                inventory.push(equipment)
            }
        } else if (command === "Upgrade") {
            let allUpgradeCommand = text[1].split('-')
            let equipment = allUpgradeCommand[0];
            let toUpgrade = allUpgradeCommand[1];
            if (inventory.includes(equipment)) {
                let text = `${equipment}:${toUpgrade}`

                let index = inventory.indexOf(equipment);
                inventory.splice(index + 1, 0, text)
            }
        }
    }
    console.log(inventory.join(' '))
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)
