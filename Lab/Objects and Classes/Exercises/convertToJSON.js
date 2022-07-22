function convertToJSON(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    }
    console.log(obj);
    let result = JSON.stringify(obj)
    //--this converts from Object to JSON
    //--this converts from Array to String Array
    console.log(result);
}

convertToJSON('George', 'Jones', 'Brown')
