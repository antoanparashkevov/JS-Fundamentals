function reverseAnArray(num, arr) {
    //First way
    //take slice from original array
    let slice = [];
    for (let i = 0; i < num; i++) {//we have POST-Incrementation
        console.log(arr[i]);
        slice.push(arr[i]);

    }
    //print the new array in reverse
    console.log(slice.reverse().join(" "));

    //Second way
    let result = '';
    for(let i=arr.length-1;i>=0;i--) {//we have POST-Decrementation
    result+=arr[i];
    result+=" "
    }
    //print the new array in reverse
    console.log(result)


}

reverseAnArray(3, [10, 20, 30, 40])
