function rotateArray(arr) {
    let rotations = +arr[arr.length - 1];
    arr.pop()
    console.log(arr)
    console.log(rotations)
    for (let i = 1; i <= rotations; i++) {
        let current = arr.pop()//removes last element and keep the value in the variable --> 4 -> [1,2,3] --> 3 -> [4,1,2]
        arr.unshift(current)//add current element to the beginning of the array -> [4,1,2,3] -> [3,4,1,2

    }
    console.log(arr.join(' '))
}

rotateArray(['1', '2', '3', '4', '2'])
