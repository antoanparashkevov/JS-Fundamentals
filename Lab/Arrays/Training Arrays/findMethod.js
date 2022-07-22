//the find() method returns the first element in the provided array that satisfy the condition in the
//callback function. If no value satisfy the condition, it returns undefined.
let array1 = [1,2,3,4,5,6]
let found1 = array1.find((element)=> element>10)
console.log(found1)//it will return undefined because no value satisfy the condition.

let array2= [10,20,30,31,32,33,34,35,36]
let found2 =array2.find((element)=> element >30)
console.log(found2)//it will return the first value what satisfy the condition.