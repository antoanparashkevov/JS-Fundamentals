function demo(){
    let arr = [1,2,3,4,5]
    let demo = arr.splice(0,2)//this returns the array of deleted items from index 0 to index 3(not included)
    console.log(demo)
    let arr2 = [5,6,3,4,5,6]
    arr2.splice(0,2,1,2)//if we console.log the new array(arr2) we will see that we changed the elements.
    console.log(arr2)
}
demo()
