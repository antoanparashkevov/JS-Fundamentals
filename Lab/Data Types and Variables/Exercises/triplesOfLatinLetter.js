function triplesOfLatinLetter(num){
    for(let i = 0;i<num;i++){
        let firstLetter = String.fromCharCode(97+i);
        for(let j = 0;j<num;j++){
            let secondLetter = String.fromCharCode(97+j);

            for(let g=0;g<num;g++){
                let thirdLetter = String.fromCharCode(97+g);

                console.log(firstLetter+secondLetter+thirdLetter)
            }
        }
    }
}
triplesOfLatinLetter(3)
