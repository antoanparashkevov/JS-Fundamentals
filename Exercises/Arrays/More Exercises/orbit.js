function orbit(coordinates) {
    let width = coordinates[0]
    let height = coordinates[1]
    let xStar = coordinates[2]
    let yStar = coordinates[3]
    let matrix = []
    //fill the matrix with zeroes
    for (let row = 0; row < width; row++) {
        matrix.push([])

        for (let col = 0; col < height; col++) {
            matrix[row][col] = 0;

        }
    }
    // console.log(matrix)
    matrix[xStar][yStar] = 1
    // console.log(`The position of the star`,matrix)
    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            //Math.max returns the biggest number
            //example
            // console.log(Math.max(1,2,3))//3
            //Math abs returns the absolute value of a number and returns only positive number
            // console.log(Math.abs(1-5))//4
            // console.log(Math.abs(5-1))//4
            //console.log(Math.abs(0-0))
            let num1 = Math.max(1 + Math.abs(row - (xStar)), 1 + Math.abs(col - (yStar)))
            //Math.max(1+0,1+0) -> 1
            //Math.max(1+0,1+1) -> 2
            matrix[row][col] = num1
            // -> matrix[0][0] = 1
            // -> matrix[0][1] = 2
        }
    }
    for (let row of matrix) {
        console.log(row.join(' '))
    }
}

orbit([4, 4, 0, 0]);
