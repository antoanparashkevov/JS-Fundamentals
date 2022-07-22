function equalNeighbors(array) {
    let count = [];
    for (let i = 1; i < array.length; i++) {
        // console.log(array[i])
        let filteredArray = array[i].filter((number, index) => {
            return array[i - 1].indexOf(number, index) === index;

            // const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
            // start from index 2
            // console.log(beasts.indexOf('bison', 2));
            // expected output: 4
            // console.log(count)

            //if the index of the current element from array[i] is equal to the index of the element from array[i-1], return the element
        })
        count.push(...filteredArray)
        let filteredArray1 = array[i - 1].filter((element, index) => {
            return element === array[i - 1][index - 1]
            //return the element from the same row but one col before if the elements are equals
        })
        count.push(...filteredArray1)
    }
    let filteredArray2 = array[array.length-1].filter((element,index)=>{
        return element === array[array.length-1][index-1]
        //on the last row if we have element who satisfy the condition to be equal with the element from previous col,
        //return the element

    })
    count.push(...filteredArray2)
    console.log(count.length)


}

equalNeighbors(
    [
        ['2', '3', '4', '7', '0'],
        ['4', '0', '5', '3', '4'],
        ['2', '3', '5', '4', '2'],
        ['9', '8', '7', '5', '4']
    ]
)
