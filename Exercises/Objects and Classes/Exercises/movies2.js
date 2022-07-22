function movies(input){
    let listOfMovies = [];
    for(let lines of input){
        // console.log(lines);
        if(lines.includes('addMovie')){
            let nameOfMovie = lines.split('addMovie ')[1]
            // console.log(nameOfMovie);
            listOfMovies.push({name: nameOfMovie})
            // console.log(listOfMovies)
        }else if(lines.includes('directedBy')){
            let name = lines.split(' directedBy ')[0]
            let director = lines.split('directedBy ')[1]

            //this will return an object. We find from all objects(element) in listOfMovies array
            //and return only this object.name who coincides with the name
            let movie = listOfMovies.find((element) => element.name === name);
            //will return the first element who fulfills the condition.
            // console.log(movie)
            if(movie){
                    movie.director = director;
            }
            // console.log(movie)
            // console.log(listOfMovies)
        }else if(lines.includes('onDate')){
            let name = lines.split(' onDate ')[0]
            let date = lines.split(' onDate ')[1]
            let movie = listOfMovies.find((element) => element.name === name);
            // console.log(movie)
            if(movie){
                movie.date = date;
            }
            // console.log(movie)
            // console.log(name,date)
        }
    }
    
    for (const mov of listOfMovies) {
        if(mov.name && mov.date && mov.director){
            console.log(JSON.stringify(mov))
        }
    }

}
movies([
    "addMovie Fast and Furious",
    "addMovie Godfather",
    "Inception directedBy Christopher Nolan",
    "Godfather directedBy Francis Ford Coppola",
    "Godfather onDate 29.07.2018",
    "Fast and Furious onDate 30.07.2018",
    "Batman onDate 01.08.2018",
    "Fast and Furious directedBy Rob Cohen",
  ]);