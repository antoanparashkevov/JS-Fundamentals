function maxSequenceOfElements(arr) {
//creating 2 empty arrays
    let newArr = [];//the final sequence
    let firstArr = [];//hold operations

    for (let i = 0; i < arr.length; i++) {//0
        firstArr = [];
        for (let j = i; j < arr.length; j++) {//0, 1,2,3,4,5 indexes
            if (arr[i] === arr[j]) {
                firstArr.push(arr[j]);
            } else {
                break;//go to the next position
            }
            if (firstArr.length > newArr.length) {
                newArr = firstArr;
            }
        }
    }
    console.log(newArr.join(' '))
}

maxSequenceOfElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
