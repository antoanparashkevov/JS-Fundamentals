function arrayRotation(arr, rotation) {
    for (let i = 0; i < rotation; i++) {
        let currentNum = arr.shift() //shift removes first element from our array and return that removed array
        arr.push(currentNum)//add one or more elements to the end of the array
    }
    console.log(arr.join(' '))

}

arrayRotation([51, 47, 32, 61, 21], 2)
