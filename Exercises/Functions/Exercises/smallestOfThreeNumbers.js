// function smallestOfThreeNumbers(num1, num2, num3) {
//     let smallestNumber = 1;
//     if (num1 < num2 && num1 < num3) {
//         smallestNumber = num1;
//     } else if (num2 < num1 && num2 < num3) {
//         smallestNumber = num2;
//     } else {
//         smallestNumber = num3;
//     }
//     console.log(smallestNumber)
// }
// smallestOfThreeNumbers(5,5,5)

// function smallestNumber (num1,num2,num3){
//     let smallestNum = (n1,n2,n3)=>{
//         let smallestNumber = 0;
//         if(n1<n2 && n1<n3){
//             smallestNumber=n1;
//         }else if(n2<n1 && n2<n3){
//             smallestNumber = n2;
//         }else{
//             smallestNumber=n3;
//         }
//         return smallestNumber
//     }
//     console.log(smallestNum(num1,num2,num3))
// }
// smallestNumber(1,2,3)

function smallestNumber(num1,num2,num3){
    let smallestNum = (n1,n2,n3)=>Math.min(n1,n2,n3)
    console.log(smallestNum(num1,num2,num3))
}
smallestNumber(2,3,4)
