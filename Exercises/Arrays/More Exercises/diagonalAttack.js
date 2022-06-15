function diagonalAttack(matrix) {
    let sumLeftDiagonal = 0
    let sumRightDiagonal = 0

    let array = splitStringToArray(matrix);
    // console.log('Array in the beginning',array);
    // console.log('Array length', array.length)
    for(let i = 0;i<array.length;i++){
        // console.log(`Every row`,array[i])
        for(let j = 0;j<array.length;j++){
            // console.log(`Every single cell`, array[i][j])
            //Condition for main diagonal

            if(i===j){
                sumLeftDiagonal+=array[i][j]
            }
            if((i+j) === array.length-1){//for example for 3x3 matrix, 0 row + 2 col = 2, arr.length = 3=>arr.length -1 = 2
                sumRightDiagonal+=array[i][j]
            }
        }
    }
    if(sumRightDiagonal=== sumLeftDiagonal){
        for(let i =0;i<array.length;i++){
            for(let j = 0;j<array.length;j++){
                if(i!==j && (i+j) !== array.length-1){//this 2 are conditions for element who is on two diagonals
                    array[i][j] = sumLeftDiagonal
                }
            }
        }
    }
    for(let element of array){
        console.log(element.join(' '))
    }


    function splitStringToArray(inputString) {
        let arrayForReturn = [];
        let secondElements = [];
        for(let i = 0;i<inputString.length;i++){
            arrayForReturn.push([0])//[0]
            secondElements = inputString[i].split(' ').map(Number)
            // console.log('Every row',secondElements)
            for(let j =0;j<secondElements.length;j++){
                // console.log('Every element from current row', secondElements[j])
                arrayForReturn[i][j]=secondElements[j]//i = 0 => row = 0, j = 0 = > [5]
                // console.log('Pushed elements',arrayForReturn)
            }
        }
        // console.log('After iterations')
        // console.log('We will see 5 rows on separate row', arrayForReturn)
        // console.log(secondElements)//it will give us last row
            return arrayForReturn
    }
}

diagonalAttack(
    ['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1']
)
