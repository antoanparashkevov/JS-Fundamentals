function sumDigits(number) {
    let sum = 0;
    let numToString = number.toString();
    //The first method
    //this is for...of loop
    // for (const char of numToString) {
    //     sum += Number(char);
    // }
    numToString.split("");//this will split the string element of individual characters and it convert it to array
    console.log(numToString);
    //The second method
    // numToString.split("").forEach(function (char) {
    //     //forEach method executes a provided function once for each array element
    //     console.log(char)//this will hold the individual characters of my String
    //     sum += Number(char);
    // })
    //The third method
    numToString.split('').map(function (char){
        console.log(Number(char));
        sum+=Number(char);
        }
    )


    console.log(sum)
}

sumDigits(245678)
