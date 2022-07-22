// function filterArray(arr) {
//     // let max = arr[0];
//     // let result = arr.filter((el)=>{
//     //     if(el>=max){
//     //         max = el;
//     //     }
//     //     return el >=max;
//     // });
//     // console.log(result)
//
//     //filter method returns the elements(el) of an array(result)
//     //that specified the condition in a callback function (anonymous function)
//     let result = arr.filter((el)=>{//find all even numbers
//         if(el%2 ===0){
//            return el;
//         }
//     })
//     console.log(result)
// }
//
// filterArray([1, 3, 8, 4, 10, 12, 3, 2, 24])

function testFiltering(){
    let arr = [10,12,20,30,40,50];
    arr =arr.filter((el)=> el!==12)
    console.log(arr)
}

testFiltering()
