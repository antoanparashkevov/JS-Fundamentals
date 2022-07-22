function buildAWall(input) {
    let inputAsNumber = input.map(Number);
    let totalCubicYardsOfConcrete = 0;
    let usageArray = [];

    let sumOfSectionsHeight = 0;

    for (let section of inputAsNumber) {//we take the starting height of all buildings
        sumOfSectionsHeight += section;
    }
    console.log(sumOfSectionsHeight)
    while (sumOfSectionsHeight < inputAsNumber.length * 30) {//while these sum is smaller than all buildings to be 30 foots
        let concreteUsedForDay = 0;
        for (let i = 0; i < inputAsNumber.length; i++) {
            if (inputAsNumber[i] < 30) {
                inputAsNumber[i]++;
                totalCubicYardsOfConcrete += 195;
                concreteUsedForDay += 195;
            }
        }
        usageArray.push(concreteUsedForDay)
        sumOfSectionsHeight = 0;
        for (let section of inputAsNumber) {//we take the new height of all buildings.
            sumOfSectionsHeight += section
        }
    }
    console.log(usageArray.join(', '));
    console.log(`${totalCubicYardsOfConcrete * 1900} pesos`);
}

buildAWall(['17', '22', '17', '19', '17'])
