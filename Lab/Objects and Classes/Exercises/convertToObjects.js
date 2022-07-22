function convertToObjects(objAsString){
    let obj =JSON.parse(objAsString)
    //--parse from JSON String to Object
    //--parse from string Array to Array
    console.log(obj);
    let keys = Object.keys(obj);//this will return an array of properties from given object
    // console.log(keys);
    for(let key of Object.keys(obj)){
        // console.log(key)
        console.log(`${key}: ${obj[key]}`)
    }
}
convertToObjects('{"name": "George", "age": 40, "town": "Sofia"}')
convertToObjects('[1,2,3,4]')
