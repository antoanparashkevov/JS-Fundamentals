// function sortNumbers(n1, n2, n3) {
//     let arrNum = [];
//     arrNum.push(n1,n2,n3);//push method adds one or more elements to the end of the array
//     let sort = arrNum.sort((a,b) => b-a);// we use arrow function with 2 params that we compare if second param is higher than the first
//     console.log(sort.join("\n"));//join converts from array to string and between elements we want to be on the new line
// }
//
// sortNumbers(-2, 3, 2);

//ascending with sort function
function sortTest1(n1,n2,n3,n4,n5){
    let arr = [];
    arr.push(n1,n2,n3,n4,n5);
    console.log(arr)
    arr.sort((a,b) => a-b)
    console.log(arr)
}
sortTest1(5,2,3,4,1);

//descending
function sortTest2(n1,n2,n3,n4,n5){
    let arr = [];
    arr.push(n1,n2,n3,n4,n5);
    console.log(arr)
    arr.sort((a,b) => b-a)
    console.log(arr)
}
sortTest2(5,2,3,4,1);
