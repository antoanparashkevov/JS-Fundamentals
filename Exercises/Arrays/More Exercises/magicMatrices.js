function magicMatrices(arr){
    let isEqual = true;
console.log(arr)
console.log(arr.length)
    for(let i = 0;i<arr.length;i++){//we loop through 3 elements
        for(let j =0;j<arr.length;j++){//if i = 0, we take first semi-array
            let currRow = arr[i];//if i = 0, we take first row
            let sumRow = 0;
            let sumCol = 0;
            for(let k = 0;k<arr.length;k++){
                let currCol = arr[k];
                sumRow+=currRow[k]
                sumCol+=currCol[j]
            }
            if(sumRow!==sumCol){
                isEqual= false;
                break;
            }
        }
        if(isEqual===false){
            break;
        }
    }
    console.log(isEqual)
}
magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
)
