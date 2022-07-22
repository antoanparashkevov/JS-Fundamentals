function mySlice(arr, start, end) {
    //from start to end(exclusive)
    let result = [];

    if (end === undefined) {
        end = arr.length;
    }
    if (start === undefined) {
        start = 0;
    }

    if (start < 0) {
        start += arr.length;
    }
    if (end < 0) {
        end += arr.length;
    }

    for (let i = start; i < end && i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
}

function printingArrays(arr) {

    let res = mySlice(arr);//our custom function with logic like slice()
    console.log(res);


    let input = [1, 2, 3, 4, 5, 6, 7, 8];
    let result = input.slice(-2)//this will return last two elements of our array
    // console.log(result);
    let result2 = input.slice(1, -1)//this will return from index 1 to last index -1
    // console.log(result2);
}

printingArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])





