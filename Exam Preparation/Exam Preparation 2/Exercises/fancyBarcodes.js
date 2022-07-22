function fancyBarcodes(data) {
    let pattern = /@#+(?<product>[A-Z][a-zA-Z0-9]{4,}[A-Z])@#+/
    let number = +data.shift()
    // console.log(number)
    while(number>0){
        number--;
        let barcode = data.shift();
        // console.log(barcode)
        let match = pattern.exec(barcode)//if we haven't a match by our pattern, it will return null

        // console.log(match)
        if(match !== null){
            let product = match.groups.product
            // console.log(product)
            let sum = ''
            for(let character of product){
                character = Number(character)
                if(!isNaN(character)){
                    sum+=character.toString()

                }
            }
            if(sum === ''){
                sum= '00'
            }
            console.log(`Product group: ${sum}`)
        }else{
            console.log('Invalid barcode')
        }
    }
}

fancyBarcodes(
    ["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]
)
