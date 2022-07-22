function piccoloWithMap(input){
    //we can use Set because we don't have value
    let parking = new Map();
    for(let line of input){
        let [command,carNumber] = line.split(', ');
        if(command === "IN"){
            parking.set(carNumber,1)
        }else{
            parking.delete(carNumber)
        }
    }
    // console.log(parking)
    if(parking.size === 0){
        console.log('Parking Lot is Empty')
    }else{
        let result = Array.from(parking.keys())
        // console.log(result.join('\n'))
        let sorted = result.sort();
        console.log(sorted.join('\n'))
    }

}
piccoloWithMap(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)
