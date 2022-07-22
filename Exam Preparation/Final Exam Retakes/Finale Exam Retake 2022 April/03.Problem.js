function problem(data) {
    let result = {}
    while (data[0] !== "Start!") {
        let [command, groups, ...arr] = data.shift().split('; ')
        console.log(arr)
        if (command === "Add") {
            if (result.hasOwnProperty(groups) === false) {
                result[groups] = {member: []}
            } else {
                // arr.forEach((el)=>)
            }
        }
    }
    console.log(result)
}

problem(["Play; The Beatles; 2584",
    "Add; The Beatles; John Lennon, George Harrison, Ringo Starr",
    "Add; The Beatles; Paul McCartney, George Harrison",
    "Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards",
    "Play; The Rolling Stones; 4239",
    "Start!"])

