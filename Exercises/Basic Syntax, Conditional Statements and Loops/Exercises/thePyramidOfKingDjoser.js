function thePyramidOfKingDjoser(base, increase) {
    let stone = 0;
    let marble = 0;
    let lazuli = 0;
    let gold = 0;
    let steps = 1;
    // stone = Math.pow(base -2,2)//this function returns the base to the exponent power -> Math.pow(3,2) -> 3^2 = 6
    // console.log(stone)
    while (base >= 1) {
        if (base > 2) {
            if (steps % 5 === 0) {
                lazuli += ((base * 4) - 4) * increase;//base*4 sides minus 4 edges
            } else {
                marble += ((base * 4) - 4) * increase;//base*4 sides minus 4 edges
            }
            steps++;
            stone += Math.pow(base - 2, 2) * increase

        } else {
            gold += Math.pow(base, 2) * increase; //only the case when we have 1 floor and the gold is 1X1 = 1
        }
        base -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(steps * increase)}`);
}

thePyramidOfKingDjoser(11, 1)
