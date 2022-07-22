function movies(input) {
  let listOfMovies = [];//we make an array

  for (let lines of input) {
    // console.log(lines)
    if (lines.includes("addMovie")) {
      let nameOfMovie = lines.split("addMovie ")[1];
      // console.log(nameOfMovie)
      listOfMovies.push({ name: nameOfMovie });//we set a key 'name' and value 'nameOfMovie
      // console.log(listOfMovies)
    } else if (lines.includes("directedBy")) {
      let info = lines.split("directedBy ");
      // console.log(info)
      let name = info[0].trim();//GodFather
      let director = info[1];
      let movie = listOfMovies.find((object) => object.name === name);//object.name = "Fast and Furious" === Inception
      // console.log(listOfMovies)
      // console.log(movie)//undefined === false

      if (movie) {//if an array (movie) exists
        movie.director = director;
        // console.log(movie)
      }
    } else if (lines.includes("onDate")) {
      let info = lines.split("onDate ");
      // console.log(info)
      let name = info[0].trim()
      let date = info[1];
      let movie = listOfMovies.find((element) => element.name === name);
      if (movie) {
        movie.date = date; //create a property date which we bind to date variable on 26 line
      }
    }
  }
  // console.log(listOfMovies)
  for (const movie of listOfMovies) {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  }
}
movies([
      'addMovie Fast and Furious',
      'addMovie Godfather',
      'Inception directedBy Christopher Nolan',
      'Godfather directedBy Francis Ford Coppola',
      'Godfather onDate 29.07.2018',
      'Fast and Furious onDate 30.07.2018',
      'Batman onDate 01.08.2018',
      'Fast and Furious directedBy Rob Cohen'
    ]
);
