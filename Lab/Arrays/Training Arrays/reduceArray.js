//reduce method passes through each element from one array and for each two elements from the array
//it sum it and returns the result. Then the process continue until the end of the loop. We can set initial value
let array = [10,20,30,40];
let initialValue = 10;
let sumArray = array.reduce(
    (a,b,c)=>a+b,

    )
console.log(sumArray)
