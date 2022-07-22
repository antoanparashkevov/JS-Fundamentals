function fancyBarcodes(input) {

    let patternBarcodes = /@#+[A-Z]([A-Za-z0-9]{4,})[A-Z]@#+/;
    let patternDigits = /\d/g;

    input.shift();
    // console.log(input)
    input.forEach(el => {
        if (patternBarcodes.test(el)) {
            if (patternDigits.test(el)) {
                let digits = el.match(patternDigits);//array with all digits inside of each element
                // let counter=0;
                let concat = ""
                for (let digit of digits) {//4, 6
                    concat += digit//concat = '4', concat = '46'
                }
                // console.log(concat)
                console.log(`Product group: ${concat}`)
            } else {
                console.log(`Product group: 00`)
            }

        }else{
            console.log('Invalid barcode')
        }
        // let matchBarcodes =


    })
}

// fancyBarcodes(["3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##",
//     "@#gTest@#"]);

fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])
