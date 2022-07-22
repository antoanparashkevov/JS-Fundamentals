function processOddNumbers(arr){
        //filter only elements at odd positions(indexes)

        let filter = arr.filter((x,i)=>i%2 ===1)//x is the value, i is the index
        //double filtered values
        //reverse new array
    let double = filter.map(x=>x*2);
        let reverse = double.reverse();
    console.log(reverse.join(' '));

}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
