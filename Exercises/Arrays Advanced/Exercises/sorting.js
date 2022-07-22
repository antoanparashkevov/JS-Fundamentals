function sorting(arr) {
    // console.log('Before sorting: ', arr)
    // arr.sort((a,b)=>a-b);//ascending
    arr.sort((a, b) => b - a);//descending
    // console.log('After sorting: ', arr)
    let newArr = [];
    while (arr.length > 0) {
        let biggerNum = arr.shift();//removes first element and returns it
        // console.log(biggerNum);
        newArr.push(biggerNum)
        let smallerNum = arr.pop();//removes last element and returns it
        // console.log(smallerNum);
        newArr.push(smallerNum)
    }
    console.log(newArr.join(' '))
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
