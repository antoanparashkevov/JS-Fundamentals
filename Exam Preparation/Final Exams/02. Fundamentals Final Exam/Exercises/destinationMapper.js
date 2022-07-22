function destinationMapper(data) {
    let pattern = /(=|\/)[A-Z][a-zA-Z]{2,}(\1)/g
    let destinations = [];
    let matchDest = data.match(pattern);
    // console.log(matchDest)
    if (matchDest !== null) {
        if (matchDest.length > 0) {
            for (let match of matchDest) {
                destinations.push(match.slice(1, -1))
            }
        }
    }
    // console.log(destinations)
    let points = destinations.join('').length
    console.log('Destinations:', destinations.join(', '))
    console.log('Travel Points:', points)

}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")
destinationMapper("ThisIs some InvalidInput")
//function destinationMapper (input) {
//
//     let cities = [];
//
//     let pattern = /(=|\/)[A-Z][A-Za-z]{2,}(\1)/g;
//
//     //console.log(matchDest);
//
//     let counter = 0;
//
//     if (pattern.test(input)){
//         const matchDest = input.match(pattern);
//         matchDest.forEach(el => counter += (el.length - 2));
//
//         for(let el of matchDest) {
//             citys.push(el.slice(1, -1));
//         }
//     }
//
//     //console.log(counter);
//
//
//     //console.log(citys)
//     console.log(`Destinations: ${citys.join(', ')}`);
//     console.log(`Travel Points: ${counter}`);
// }
