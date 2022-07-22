// function distinctArray(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let currElement = arr[i];
//         for (let j = i + 1; j < arr.length; j++) {//we want to take from next element
//             let nextElement = arr[j];
//             if (currElement === nextElement) {
//                 arr.splice(j, 1);
//                 j = j-1;//return from the current index
//             }
//         }
//     }
//     console.log(arr.join(' '))
//
// }
//
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
// distinctArray([1, 2, 3, 4])

// function distinctArray(arr) {
//     let newArray = [];
//     // for (let i = 0; i < arr.length; i++) {
//     //             if(newArray.includes(arr[i])){
//     //                 newArray.push(arr[i])
//     //             }
//     // }
//     for (let number of arr) {
//         if (!newArray.includes(number)) {
//             newArray.push(number)
//         }
//     }
//     console.log(newArray.join(' '))
// }
//
// distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
// distinctArray([1, 2, 3, 4])
