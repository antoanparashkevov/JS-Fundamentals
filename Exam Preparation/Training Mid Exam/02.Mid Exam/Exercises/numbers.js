// function numbers(input){
//     let arrOfNumbers = input.split(' ').map(Number);
//     arrOfNumbers.sort((a,b)=>b-a)//because we want to have the biggest integer on the first places
//     // console.log(arrOfNumbers)
//     let lengthOfArr = arrOfNumbers.length
//     // console.log(lengthOfArr);
//     let sum = 0;
//     for (let number of arrOfNumbers) {
//         sum +=number
//     }
//     // console.log(sum)
//     let avg = sum/lengthOfArr
//     // console.log(avg.toFixed(2));
//
//     let result = [];
//     for(let i = 0;i<arrOfNumbers.length;i++){
//         if(arrOfNumbers[i] > avg && result.length <5){
//             result.push(arrOfNumbers[i]);
//         }else if(arrOfNumbers[0]<=avg){
//             console.log('No');
//         }
//
//     }
//     // console.log(result)
//
//     // console.log(result);
//     let endResult = result.sort((a,b)=>b-a).join(' ')//descending order(низходящ ред)
//     console.log(endResult)
// }
// numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
// // numbers('1')
// // numbers('-1 -2 -3 -4 -5 -6')
// // numbers('10 20 30 40 50')

function numbers(str) {
    let arr = str.split(' ').map(Number);

    let avg = arr.reduce((a, b) => a + b) / arr.length;
    //we take an array and sum every element and the result is only one value
    // then we divide to the length of the array

    let biggerThanAvg = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            biggerThanAvg.push(arr[i]);
        }
    }

    let sorted = biggerThanAvg.sort((a, b) => b - a);//descending order
    // console.log(sorted)//all elements bigger than the avg value
    let topIntegers = sorted.slice(0, 5);//we take in this variable the first 5 deleted items.


    if (topIntegers.length > 0) {//if it isn't big than 0, then we have one element
        console.log(topIntegers.join(' '));
    } else {
        console.log('No');
    }
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
// numbers('1')
