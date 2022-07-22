function echoType(param) {
    let type = typeof param;//typeof operator always returns string data type
    // let type2 = typeof(param) //the same like above

    //print data types

    console.log(type);

    //print value, if type is String or Number
    if (type === "string" || type === "number") {
        console.log(param)
        //otherwise, print Error message
    } else {
        console.log("Parameter is not suitable for printing")
    }


}

echoType("Hello, Javascript")
echoType(18)
echoType(null) //this is object!
