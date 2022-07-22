function radioCrystals(input) {
    let finalClearance = input.shift()//takes the final result of the crystal and removes from an array
    for (let crystal of input) {
        let startCrystal = crystal//start value and subsequently we change it.
        console.log(`Processing chunk ${crystal} microns`);
        if (startCrystal > finalClearance) {
            let cut = subtractMethod(startCrystal, finalClearance, cutCrystal);//this will return resultArray
            //[2,3125]. On the zero index we have counter, on the first index we have currentCrystal after operations
            // console.log(cut)
            if (cut[0] > 0) {//if counter > 0
                startCrystal = printOperationAndWashing('Cut x', cut[0], cut[1])
            }
            if (startCrystal > finalClearance) {
                let lap = subtractMethod(startCrystal, finalClearance, lapCrystal)
                // console.log(lap)
                if (lap[0] > 0) {
                    startCrystal = printOperationAndWashing("Lap x", lap[0], lap[1])
                }
                if (startCrystal > finalClearance) {
                    let grind = subtractMethod(startCrystal, finalClearance, grindCrystal);
                    // console.log(grind)
                    if (grind[0] > 0) {
                        startCrystal = printOperationAndWashing('Grind x', grind[0], grind[1]);
                    }
                    if (startCrystal > finalClearance) {
                        let etch = subtractMethod(startCrystal, finalClearance, etchCrystal)
                        // console.log(etch)
                        if (etch[0] > 0) {
                            startCrystal = printOperationAndWashing('Etch x', etch[0], etch[1])
                        }
                    }

                }
            }

        }
        if((finalClearance-startCrystal) === 1){
            startCrystal = xRayCrystal(startCrystal)
            console.log("X-ray x1")
        }
        console.log(`Finished crystal ${startCrystal} microns`)

    }

    //functions for helping me
    function cutCrystal(crystal) {
        return crystal / 4;
    }

    function lapCrystal(crystal) {
        return crystal * 0.80;
    }

    function grindCrystal(crystal) {
        return crystal - 20;
    }

    function etchCrystal(crystal) {
        return crystal - 2;
    }

    function xRayCrystal(crystal) {
        return crystal + 1;
    }

    function transportingAndWashing(crystal) {
        return Math.floor(crystal)
    }

    function printOperationAndWashing(operationText, counter, currentCrystal) {//print on every operation
        //we want to print the current operation, what number of count is it, and flooring the microns
        console.log(`${operationText}${counter}`)
        let afterWashing = transportingAndWashing(currentCrystal)//because we want to floor the microns smaller than 1 micron
        console.log("Transporting and washing")
        return afterWashing;
    }

    function subtractMethod(currentCrystal, finalClearance, functionToExecute) {
        let resultArray = [];
        let counter = 0;
        while (currentCrystal >= finalClearance - 1) {//-1 because we haven't yet rounded down to an integer
            let afterOperation = functionToExecute(currentCrystal)
            if (afterOperation >= finalClearance - 1) {//if we haven't yet do the desired crystal
                counter++;
                currentCrystal = afterOperation
            } else {
                break;
            }
        }
        resultArray.push(counter)
        resultArray.push(currentCrystal)
        //because return operation can't return more than one variable, we put these two variable into an array
        return resultArray
    }
}

radioCrystals([1375, 50000])


/*
•	Cut – cuts the crystal in 4
•	Lap – removes 20% of the crystal’s thickness
•	Grind – removes 20 microns of thickness
•	Etch – removes 2 microns of thickness
•	X-ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!
•	Transporting and washing – removes any imperfections smaller than 1 micron (round down the number);
    do this after every batch of operations that remove material
*/
