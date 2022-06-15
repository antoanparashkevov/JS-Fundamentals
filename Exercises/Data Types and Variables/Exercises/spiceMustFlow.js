// const func = (startingYield) => {//this is arrow function
//     let spicesEarned = 0;
//     let daysCount = 0;
//
//     while(startingYield>=100){
//         daysCount++;
//         spicesEarned+=startingYield-26;
//         startingYield-=10;
//     }
//     console.log(daysCount);
//     if(daysCount !== 0){
//         console.log(spicesEarned-26)
//     }else{
//         console.log(startingYield)
//     }
//
// }
// func(111)
function spiceMustFlow(startingYield){
    let spicesEarned = 0;
    let daysCount = 0;
    let consumption = 26;

    while(startingYield>=100){
        spicesEarned+=startingYield;
        spicesEarned-=consumption;
        startingYield-=10;
        daysCount++;
    }
    console.log(daysCount)
    spicesEarned-=26;
    if(spicesEarned<0){
        spicesEarned=0;
    }
    console.log(spicesEarned)

}
spiceMustFlow(450)
