let arr = [5, 3, 8, -2, 11, -23];


console.log(myIncludes(arr, 3));
console.log(myIncludes(arr, 4));
console.log(myIncludes(arr, -23));

//the same logic like includes() method
function myIncludes(arr, value) {
    //this function will return boolean expression
    for (let arrElement of arr) {
        if (arrElement === value) {
            return true;//this terminates the function
        }
    }
    return false;
}

console.log(myIndexOf(arr, 3));
console.log(myIndexOf(arr, 4));
console.log(myIndexOf(arr, -23));

function myIndexOf(arr, value) {
    //this will return positive index or if it hasn't any element, it will return -1 by default

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i
        }

    }
    return -1;
}
let arr2 = [3,8,-1,5,2]

arr2.unshift(arr.pop())//unshift adds element to the beginning of the array, but arr.pop removes last element(2)
//That's why 2 is now first element of the array and the positions of all elements are moved one forward
console.log(arr2[4])
