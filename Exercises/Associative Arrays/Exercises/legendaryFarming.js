function legendaryFarming(data) {
    let specialItems = {
        motes: 0,
        shards: 0,
        fragments: 0,
    }
    let junkItems = {}
    data = data.split(' ')
    // console.log(data)
    for (let i = 0; i < data.length; i += 2) {
        let value = Number(data[i])
        let material = data[i + 1]
        if (material.toLowerCase() === "motes" || material.toLowerCase() === "shards" || material.toLowerCase() === "fragments") {
            specialItems[material.toLowerCase()] += value;
        } else {
            if (junkItems.hasOwnProperty(material.toLowerCase()) === false) {
                junkItems[material.toLowerCase()] = 0
            }
            junkItems[material.toLowerCase()] += value;
        }
        if (specialItems.motes >= 250) {
            console.log("Dragonwrath obtained!");
            specialItems.motes -= 250;
            break
        }
        if (specialItems.shards >= 250) {
            console.log('Shadowmourne obtained!');
            specialItems.shards -= 250;
            break;
        }
        if (specialItems.fragments >= 250) {
            console.log("Valanyr obtained!")
            specialItems.fragments -= 250;
            break;
        }
    }
    //Then, print the remaining shards, fragments, motes, ordered by quantity in descending order,
    //then by name in ascending order, each on a new line.
    //Finally, print the collected junk items, in alphabetical order.
    let junkSorted =
        Object.entries(junkItems)
            .sort((a, b) =>
                a[0].localeCompare(b[0]))
    // console.log(junkSorted)
    let specialSorted = Object.entries(specialItems)
        .sort((a,b)=>b[1]-a[1])
    // console.log(specialItems)
    // console.log(junkItems)
    // console.log(specialSorted)
    // console.log(specialSorted[0])
    // console.log(specialSorted[1][1])
    // console.log(specialSorted[0][0].localeCompare(specialSorted[1][0]))
    if(specialSorted[0][1] === specialSorted[1][1]){//if the value is the same
        if(specialSorted[0][0].localeCompare(specialSorted[1][0]) >0){//if first name element is before second in alphabetical order
            let change = specialSorted[1]
            specialSorted[1] = specialSorted[0]
            specialSorted[0] = change
        }
    }
    if(specialSorted[0][1] === specialSorted[2][1]){
        if(specialSorted[0][0].localeCompare(specialSorted[2][0]) >0){
            let change = specialSorted[2]
            specialSorted[2] = specialSorted[0]
            specialSorted[0] = change
        }
    }
    if(specialSorted[1][1] === specialSorted[2][1]){
        if(specialSorted[1][0].localeCompare(specialSorted[2][0]) >0){
            let change = specialSorted[2]
            specialSorted[2] = specialSorted[1]
            specialSorted[1] = change
        }
    }
    for(let [name,value] of specialSorted){
        console.log(`${name}: ${value}`)
    }
    for(let [name,value] of junkSorted){
        console.log(`${name}: ${value}`)
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
