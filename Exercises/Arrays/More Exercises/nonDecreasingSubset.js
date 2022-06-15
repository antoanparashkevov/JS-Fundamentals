function nonDecreasingSubset(arr) {
    let max = arr[0];//we start from first element of course.
    let result = arr.filter((el)=>{//for each element for our arr, we check whether el is bigger than max.
        //If it is bigger than max, max = el. That is the way that now current max element is el.
        //This anonymous function always will return el >=max. That is the constructor of the new result array.
        if(el>=max){
            max = el;
        }
        return el >=max;
    });
    console.log(result.join(' '))
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])
