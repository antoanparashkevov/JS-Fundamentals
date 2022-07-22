function pointsValidation(input) {
    let x1 = input[0]
    let y1 = input[1]
    let x2 = input[2]
    let y2 = input[3]


    function checkingDimension(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    }

    if (Number.isInteger(checkingDimension(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    if (Number.isInteger(checkingDimension(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    if (Number.isInteger(checkingDimension(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }


}

// pointsValidation([2, 1, 1, 1])
pointsValidation([3, 0, 0, 4])
