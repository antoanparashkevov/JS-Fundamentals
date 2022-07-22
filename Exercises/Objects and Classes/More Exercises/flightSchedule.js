function flightSchedule(arrays) {
    let allFlights = arrays[0]
    // console.log(allFlights)
    let changedStatus = arrays[1]
    // console.log(changedStatus)
    let flightStatus = arrays[2]
    // console.log(flightStatus)
    let flightList = {}
    for(let unitFlight of allFlights){
        // console.log(unitFlight)
        let [flightNum, destination,restDestination] = unitFlight.split(' ')
        // console.log(restDestination)
        let fullNameOfDestination = ''
        if(restDestination!== undefined){//these destinations that have 2 names
           fullNameOfDestination = destination+ " " + restDestination
            // console.log(fullNameOfDestination)
            flightList[flightNum] = {//here we make object of objects inside of it
               Destination: fullNameOfDestination,
                Status:"Ready to fly"
            }
            // console.log(flightList)
            // console.log(flightList[flightNum])
        }else{
            flightList[flightNum] ={
                Destination: destination,
                Status:"Ready to fly"
            }
        }
    }
    // console.log(changedStatus)
    for(let changedFlight of changedStatus){
        let [flightNum, status] = changedFlight.split(' ')
        if(flightList.hasOwnProperty(flightNum)){
            flightList[flightNum].Status = status
        }
    }
    for(let flyNum in flightList){
        // console.log(flyNum)
        if(flightList[flyNum].Status === flightStatus.toString()){
            console.log(flightList[flyNum])
        }
    }
}

//we have one array and inside of it we have 3 arrays
flightSchedule([
        ['WN269 Delaware',
            'FL2269 Oregon',
            'WN498 Las Vegas',
            'WN3145 Ohio',
            'WN612 Alabama',
            'WN4010 New York',
            'WN1173 California',
            'DL2120 Texas',
            'KL5744 Illinois',
            'WN678 Pennsylvania'],
        ['DL2120 Cancelled',
            'WN612 Cancelled',
            'WN1173 Cancelled',
            'SK430 Cancelled'],
        ['Cancelled']
    ]
)
