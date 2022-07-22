function guineaPig(input) {
   input = input.map(Number)
    // console.log(input)
    let foodPerGr= input[0]*1000
    let hayPerGr = input[1]*1000
    let coverPerGr = input[2]*1000;
    let petPerGram=input[3]*1000;
    // console.log(foodPerGr,hayPerGr,coverPerGr,petPerGram)
    // let days = 1;
    // let existFood=0;
    // let existHay=0;
    // let existCover=0;
    for(let i = 1;i<=30;i++){
        foodPerGr-=300;
        if(i%2===0){
            let toGive = foodPerGr*0.05;
            hayPerGr-=toGive
        }
        if(i%3 === 0){
            let toGive = petPerGram/3;
            coverPerGr-=toGive
        }

    }
    if(foodPerGr<=0 || hayPerGr<=0 || coverPerGr<=0){
        console.log('Merry must go to the pet store!');
    }else{
        foodPerGr = foodPerGr/1000
        hayPerGr = hayPerGr/1000
        coverPerGr = coverPerGr/1000
        console.log(`Everything is fine! Puppy is happy! Food: ${foodPerGr.toFixed(2)}, Hay: ${hayPerGr.toFixed(2)}, Cover: ${coverPerGr.toFixed(2)}.`)
    }



}
//
// guineaPig(["10",
//     "5",
//     "5.2",
//     "1"])

guineaPig((["1",
        "1.5",
        "3",
        "1.5"
    ])
)
