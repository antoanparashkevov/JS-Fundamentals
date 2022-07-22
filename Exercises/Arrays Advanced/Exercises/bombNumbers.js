function bombNumbers(arr, bomb) {
    let bombNumber = bomb[0];
    // console.log(bombNumber)
    let bombRadius = bomb[1]
    // console.log(bombRadius)
    let indexOfBomb = arr.indexOf(bombNumber)
    // console.log(indexOfBomb)//bombNumber is on index 2 in the arr
    while(arr.includes(bombNumber)){
        let startExplosionIndex = Math.max(0,indexOfBomb-bombRadius);//from 0 index to 1-1=0 -->0
        // console.log(startExplosionIndex)
        let explosionLength =bombRadius*2+1;//1*2 +1-->
        // *2 because we sum on left and on right
        // +1 because we take and the current bomb index

        // console.log(explosionLength)
        arr.splice(startExplosionIndex,explosionLength)
        indexOfBomb = arr.indexOf(bombNumber);
        //because if we have two bombs on one array and we removed the first one
        //we want to set the new index on the second bomb
    }
    // console.log(arr);
    // let sum = 0
    // for(let i =0;i<arr.length;i++){
    //     sum+=arr[i]
    // }
    // console.log(sum)
    let sum = arr.reduce((a, b)=>a+b,0);
    console.log(sum)
}

// bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
//     [4, 2]
// )
// bombNumbers([1, 4, 4, 2, 8, 9, 1],
//     [9, 3]
// )
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
)
