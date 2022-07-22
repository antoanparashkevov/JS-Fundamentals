function activationKeys(data) {
    let activationKey = data.shift();//data[0]
    let line = data.shift();
    while (line !== "Generate") {
        let [command, first, second, third] = line.split('>>>')

        if (command === "Contains") {
            if (activationKey.includes(first)) {
                console.log(`${activationKey} contains ${first}`)
            } else {
                console.log('Substring not found!')
            }
        } else if (command === 'Flip') {
            let startInx = Number(second)
            let endInx = Number(third)
            if (startInx >= 0 && startInx < activationKey.length && endInx >= 0 && endInx < activationKey.length) {
                let cut = activationKey.substring(startInx, endInx);
                if (first === "Upper") {
                    activationKey = activationKey.replace(cut, cut.toUpperCase())
                    console.log(activationKey)
                } else if (first === "Lower") {
                    activationKey = activationKey.replace(cut, cut.toLowerCase())
                    console.log(activationKey)
                }
            }
        } else if (command === "Slice") {
            let startInx = Number(first)
            let endInx = Number(second)
            if (startInx >= 0 && startInx < activationKey.length && endInx >= 0 && endInx < activationKey.length) {
                let cut = activationKey.substring(startInx, endInx)
                activationKey = activationKey.replace(cut, '')
            }
            console.log(activationKey)

        }
        line = data.shift();
    }
    console.log(`Your activation key is: ${activationKey}`)

}

activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
)
// activationKeys((["134softsf5ftuni2020rockz42",
//     "Slice>>>3>>>7",
//     "Contains>>>-rock",
//     "Contains>>>-uni-",
//     "Contains>>>-rocks",
//     "Flip>>>Upper>>>2>>>8",
//     "Flip>>>Lower>>>5>>>11",
//     "Generate"])
// )
