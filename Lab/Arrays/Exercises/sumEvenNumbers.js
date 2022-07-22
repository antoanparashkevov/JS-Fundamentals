function sumEvenNumbers(arr){
//to convert one array from String elements to Number elements
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        arr[i]= Number(arr[i]);
        if(arr[i] %2 ===0){
            sum+=arr[i];
        }
    }
    console.log(sum);

}
sumEvenNumbers(   ['1','2','3','4','5','6'])
