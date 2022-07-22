function piccolo(input){
        //we can use Set because we don't have value
        let parking = new Set();
        for(let line of input){
            let [command,carNumber] = line.split(', ');
            if(command === "IN"){
                parking.add(carNumber)
            }else{
                parking.delete(carNumber)
            }
        }
        // console.log(parking)
    if(parking.size === 0){
        console.log('Parking Lot is Empty')
    }else{
        let result = Array.from(parking)
        // console.log(result.join('\n'))
        let sorted = result.sort();
        console.log(sorted.join('\n'))
    }

}
piccolo(['IN, CA2844AA',
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
