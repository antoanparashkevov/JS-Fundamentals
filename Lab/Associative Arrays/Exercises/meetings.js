function meetings(input) {
    let result = {}
    for(let line of input){
        let tokens = line.split(' ')
        let [day,name] = tokens
        if(result.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        }else{
            result[day] = name;
            console.log(`Scheduled for ${day}`);
        }


    }

    for(let day in result){
        console.log(day,'->',result[day])
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)
