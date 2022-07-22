function worldTour(array) {
    let trip = array.shift()
    // console.log(trip)
    let tokens = array.shift()
    // let trip = GeorgiAntoan
    //trip.splice(0,7) = GeorgiAn + Rome = GeorgiAnRome + toan = GeorgiAnRometoan = newTrip
    //trip.slice(index) = toan because we took from 7 index to the length of the string.
    while (tokens !== "Travel") {
        //destructuring
        let [command, ...rest] = tokens.split(':')
        // console.log(rest)
        // console.log(command)
        switch (command.trim()) {
            case "Add Stop":
                let index = Number(rest[0])
                let newDestination = rest[1]
                if (index >= 0 && index < trip.length) {
                    trip = trip.split('')
                    // console.log('Array', trip)
                    trip.splice(index, 0, newDestination)
                    trip = trip.join('')
                    // console.log('Again string:', trip)
                    console.log(trip)
                }
                break;
            case "Remove Stop":
                let startIndex = Number(rest[0])
                let endIndex = Number(rest[1])
                if (startIndex >= 0 && startIndex < trip.length && endIndex >= 0 && endIndex < trip.length) {
                    trip = trip.split('')
                    trip.splice(startIndex,(endIndex-startIndex)+1)
                    trip = trip.join('')
                    console.log(trip)
                }
                break;
            case "Switch":
                let oldStr = rest[0].trim()
                let newStr = rest[1].trim()
                // console.log(oldStr,newStr)
               if(trip.startsWith(oldStr)){
                   // console.log('test')
                  trip = trip.replace(oldStr,newStr)
                   console.log(trip)
               }else{
                   console.log(trip)
               }
                break;
        }

        tokens = array.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${trip}`)
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])


// Hawai::RomeCyprys-Greece


//let trip = An toan Georgi
//delete from 2 to 5 index 2 = startIndex 5 = endIndex
//trip.splice(2,5-2 +1)
