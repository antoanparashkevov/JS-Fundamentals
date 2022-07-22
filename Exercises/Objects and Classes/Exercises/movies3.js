function movies3(data) {
    let ArrayOfMovies = []
    while (data.length > 0) {
        let tokens = data.shift()
        // console.log(tokens)
        if (tokens.includes("addMovie")) {
            let movieName = tokens.split('addMovie ')[1]
            // console.log(movieName[1])

                ArrayOfMovies.push({name: movieName})

        } else if (tokens.includes('directedBy')) {
            let command = tokens.split(' directedBy ')
            // console.log(command)
            if (ArrayOfMovies.hasOwnProperty(command[0])) {
                ArrayOfMovies[command[0]].director = command[1];
            }
        } else if (tokens.includes('onDate')) {
            let command = tokens.split(' onDate ')
            // console.log(command)
            if (objectOfMovies.hasOwnProperty(command[0])) {
                objectOfMovies[command[0]].date = command[1];
            }
        }
    }

    for (let key of Object.keys(objectOfMovies)) {
        let keys = Object.keys(objectOfMovies[key])
        // console.log(keys)
        if(keys.length === 2){
                console.log(JSON.stringify(objectOfMovies))
        }
        // console.log(objectOfMovies)
    }
    //{"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
    // {"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}
}

movies3([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
)
