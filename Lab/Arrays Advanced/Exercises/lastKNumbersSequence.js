function lastKNumbersSequence(n, k){
    //this is Fibonacci if we sum last two elements
    let result = [1];//we start from 1
    for(let i = 0;i< n -1;i++){//n-1 because we already start with 1 element
        let lastK = result.slice(-k);//we take last K elements(in our case last 2 elements)
        let sum = 0;
        for (let number of lastK) {//we iterate through lastK array
            sum+=number;//first iteration, number is equal to 1, so sum is equal to 1
        }
        result.push(sum)//we push the sum here.
    }
    console.log(result.join(' '))
}
lastKNumbersSequence(8,2)
