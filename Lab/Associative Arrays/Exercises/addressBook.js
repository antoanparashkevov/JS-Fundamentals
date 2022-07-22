function addressBook(input) {
    let result = {};
    for (let line of input) {
        let [name, address] = line.split(':')

        result[name] = address;

    }
    let sorted = Object.entries(result)
    // console.log(sorted)


    // sorted.sort((a, b) => {
    //     // console.log(a,b)
    //     let nameA = a[0];
    //     let nameB = b[0];
    //     // console.log("names:",nameA,nameB)
    //     return nameA.localeCompare(nameB);//sort by alphabetical order.
    //     }
    // )
    //THIS ABOVE CAN BE WRITTEN ON ONE LINE
    // sorted.sort((a,b)=>a[0].localeCompare(b[0]))
    //OR WE CAN SORT ONLY BY KEYS
    let sortedKeys = Object.keys(result)
    // sortedKeys.sort((a,b)=>{
    //     // console.log(a,'<->',b)
    // })
    sortedKeys.sort((a, b) => a.localeCompare(b));


    // console.log(sorted)
    // for (let key of sorted) {
    //     console.log(key[0],'->',key[1])
    // }

    //or with destructuring
    //     for(let [name,address] of sorted){
    //         console.log(name,'->',address)
    //     }

    //or with keys
    for (let key of sortedKeys) {
        console.log(key, '->', result[key])
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)
