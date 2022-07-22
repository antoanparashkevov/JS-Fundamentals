//map,filter and sort transform the arrays.

//map transform all elements from one array and creates a new array.
//map is also known as compliance.

let myArr1 = ['one', 'two', 'three', 'four'];
let lengths = myArr1.map(x => x.length);//this will return for every element the length
console.log(lengths);


let myArr2 = ['1', '2', '3', '4', '5']
let nums = myArr2.map((Number));
console.log(nums);


let r = mapping(myArr2);
// console.log(`r ->`, r)
console.log(nums, '\n', `r-> `, r)

function mapping(arr) {
    let result = [];
    for (let element of arr) {
        result.push(Number(element));
    }
    return result;
}

let r2 = incrementByOne(myArr2,increment);//we can call the function here by passing with parameter func
console.log(r2)

function incrementByOne(arr,func) {
    let result = [];
    for (let element of arr) {
        result.push(func(Number(element)));
    }
    return result
}

function increment(x) {
    return x + 1;
}
