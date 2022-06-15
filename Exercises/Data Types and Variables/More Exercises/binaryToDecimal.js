function binaryToDecimal(binary){
    let binaryStr = binary.toString();
    let decimal = parseInt(binaryStr,2);
    //parseInt gets String argument and parse it into integer of the specified base in mathematical numeral system
    console.log(decimal);
}
binaryToDecimal(11110000);
