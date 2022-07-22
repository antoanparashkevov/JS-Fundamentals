function condenseArrayToNumber(arr) {

    //for each element in the array, except the last, sum with next element
    let condensed = [];
    for (let n of arr) {//for-of Loop iterates through all elements in arr
        condensed.push(n);//n are elements of array and we push it to the new array named condensed
    }
    //now condensed and arr are the same arrays
    console.log(condensed);
    console.log(arr);

    while (condensed.length > 1) { //while the array has more than 1 element because if we have 1 element, that is the element who i try to find
        let temp = [];
        for(let i=0;i<condensed.length-1;i++){//2,10  //12,13
            temp.push(condensed[i]+condensed[i+1]);//2 + 10 , 10 + 3, 12 + 13 = 25
        }//[12,13]
        condensed=temp;//now temp is [12,13] and condensed is [12,13]
    }

    console.log(condensed[0]);

}

condenseArrayToNumber([2, 10, 3])
