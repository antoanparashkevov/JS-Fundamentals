function garage(data) {
    let garages = {};
    for(let info of data){
        let [garage,rest] = info.split(' - ')
        let pairs = rest.split(', ')
        // console.log(pairs)
        let features = {}
        for(let eachItem of pairs){
            let [key,value] = eachItem.split(": ")
            features[key] = value
        }
        // console.log(features)
        if(!garages.hasOwnProperty(garage)){
            garages[garage] = []
        }
        garages[garage].push(features)
    }
    for(let garageProperty in garages){
        console.log(`Garage № ${garageProperty}`)
       for(let current of garages[garageProperty]){
           // console.log(current)
           let i = 1;//again we set it to 1 because we are on the next garage.
           let result = ''//and clear what we have in previous garage.
           for(let keys in current){
               // console.log(keys)//this prints property
               // console.log(current[keys])//this prints value
               if(i === 1){
                  result+=`--- ${keys} - ${current[keys]}`//it concatenate it with else condition
               }else{
                  result+=`, ${keys} - ${current[keys]}`
               }
                i++
           }
           console.log(result)
       }
    }

}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
])
