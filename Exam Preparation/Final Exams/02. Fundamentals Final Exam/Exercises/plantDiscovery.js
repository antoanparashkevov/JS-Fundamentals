function plantDiscovery(data) {
    let numberOfTrees = Number(data.shift());
    // console.log(numberOfTrees)//3
    let treeData = {};
    while (numberOfTrees > 0) {//3,2,1
        numberOfTrees--;
        // "Arnoldii<->4",
        //  "Woodii<->7",
        let [treeName, rare] = data.shift().split('<->');
        treeData[treeName] = {
            rare: Number(rare),
            rating: []
        }
    }
    // console.log(treeData)
    while (data[0] !== "Exhibition") {
        let tokens = data.shift()
        //"Rate: Woodii - 10",
        let [command, ...others] = tokens.split(': ')
        // console.log(others)
        let [nameOfTree, p1] = others.join('').split(' - ')
        p1 = Number(p1);
        // console.log(p1)
        // let perTreeData = treeData[nameOfTree]//perTreeData is an object.
        // console.log(nameOfTree, perTreeData)
        if (command === "Rate") {
            if (!treeData.hasOwnProperty(nameOfTree)) {
                console.log("error")
            } else {
                treeData[nameOfTree].rating.push(p1);
            }

        } else if (command === "Update") {
            if (!treeData.hasOwnProperty(nameOfTree)) {
                console.log("error")
            } else {
                treeData[nameOfTree].rare = p1
            }
        } else if (command === "Reset") {
            if (!treeData.hasOwnProperty(nameOfTree)) {
                console.log("error")
            } else {
                treeData[nameOfTree].rating = []
            }
        }
    }
    let entries = Object.entries(treeData)
    // console.log(entries)
    console.log('Plants for the exhibition:')
    for (let [name, value] of entries) {
        // console.log(name)
        // console.log(value.rating)
        let sum = 0;
        for (let i = 0; i < value.rating.length; i++) {
            if (value.rating.length !== 0) {
                sum += value.rating[i]
            }
        }
        // console.log(sum)
        let average = 0;
        if (sum !== 0) {
            average = sum / value.rating.length
        }
        // console.log(average)
        console.log(`- ${name}; Rarity: ${value.rare}; Rating: ${average.toFixed(2)}`)
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])

