function phoneBookMap(input){
    let result = new Map();
    for(let line of input){
        let [name,phone]= line.split(' ')

        result.set(name,phone);
    }
    // console.log(result)
    // let keys = result.keys()
    // for(let key of keys){
    //     console.log(key,'->',result.get(key))
    // }
    // let entries = result.entries()
    // for(let [name,phone] of entries){
    //     console.log(name,'->',phone)
    // }
    for(let [name,phone] of result){
        console.log(name,'->',phone)
    }

}
phoneBookMap([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
])
