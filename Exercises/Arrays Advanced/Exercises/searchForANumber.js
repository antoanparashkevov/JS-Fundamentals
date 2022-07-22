function searchForANumber(arr, input) {
    let numberToTakeFromArr = input[0];
    let deletedCount = input[1];
    let searchedNumber = input[2];
    let myNewArr = arr.splice(0, numberToTakeFromArr);//this will return the deleted items from arr
    // console.log(myNewArr)
    myNewArr = myNewArr.splice(deletedCount)//this will return new array from index 2 to the end
    // console.log(myNewArr);
    let counter = 0;
    for(let i =0;i<myNewArr.length;i++){
        if(myNewArr[i]===searchedNumber){
            counter++
        }
    }
    console.log(`Number ${searchedNumber} occurs ${counter} times.`)
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)
