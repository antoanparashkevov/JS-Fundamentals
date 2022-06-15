function lowerToUpper(char){
    //First Way
    if(char === char.toUpperCase()){
        console.log('upper-case')
    }else{
        console.log('lower-case')
    }
    //Second way
    //with ternary operator
    // console.log(char === char.toUpperCase() ? "upper-case" : 'lower-case')
}
lowerToUpper('L')
lowerToUpper('l')
