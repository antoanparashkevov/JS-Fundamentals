function bitcoinMining(input) {
    let earnMoney = 0;
    let bitcoin = 0;
    let eachDay = 0;
    let thisDay = 0;
    for (let i = 0; i < input.length; i++) {
        eachDay++;
        let gramsPerEachDay = Number(input[i]);
        if (eachDay % 3 === 0) {
            gramsPerEachDay *= 0.70;
        }

        earnMoney = earnMoney + (gramsPerEachDay * 67.51);


        if (earnMoney - 11949.16 >= 0) {
            bitcoin++;
            earnMoney -= 11949.16;
        }

        if (bitcoin === 1) {
            thisDay = eachDay

        }

    }
    while(earnMoney >=11949.16){
        bitcoin++;
        earnMoney-=11949.16;
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if (thisDay !== 0) {
        console.log(`Day of the first purchased bitcoin: ${thisDay}`);
    }
    console.log(`Left money: ${earnMoney.toFixed(2)} lv.`);
}

bitcoinMining(['3124.15', '504.212', '2511.124'])

