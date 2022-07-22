function theBiscuitFactory(input) {
    let biscuitsPerWorkerPerDay = Number(input.shift())//78
    let countOfWorkers = Number(input.shift())//8
    let biscuitsCompeteFactoryPerMonth = Number(input.shift())//16000


    let totalBiscuitsPerMonth = 0;
    for (let i = 1; i <= 30; i++) {
        let totalBiscuitsPerDay = 0;
        if (i % 3 === 0) {
            totalBiscuitsPerDay += (biscuitsPerWorkerPerDay * countOfWorkers) * 0.75;
            totalBiscuitsPerDay = Math.floor(totalBiscuitsPerDay)
        } else {
            totalBiscuitsPerDay += biscuitsPerWorkerPerDay * countOfWorkers;
        }
        totalBiscuitsPerMonth += totalBiscuitsPerDay;
    }
    console.log(`You have produced ${totalBiscuitsPerMonth} biscuits for the past month.`)
    let difference;
    let percentage;
    if (biscuitsCompeteFactoryPerMonth>totalBiscuitsPerMonth) {
        difference = biscuitsCompeteFactoryPerMonth - totalBiscuitsPerMonth
        percentage = (difference / biscuitsCompeteFactoryPerMonth) * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`)
    } else if(totalBiscuitsPerMonth>biscuitsCompeteFactoryPerMonth) {
        difference = totalBiscuitsPerMonth - biscuitsCompeteFactoryPerMonth;
        percentage = (difference / biscuitsCompeteFactoryPerMonth) * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`)
    }
    //because we are competing with other factory and we want to know how much our biscuits are less or more than the other factory
}

theBiscuitFactory((["78",
    "8",
    "16000"])
)
console.log('--------')
theBiscuitFactory((["65",
    "12",
    "26000"])
)
console.log('--------')
theBiscuitFactory((["163",
    "16",
    "67020"])
)
