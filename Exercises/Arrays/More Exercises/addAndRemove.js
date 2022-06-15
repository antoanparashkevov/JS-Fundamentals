function addAndRemove(arr) {
    let arr2 = [];
    let digit = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            arr2.push(digit);
            digit++;
        } else if (arr[i] === 'remove') {
            digit++;
            arr2.pop()

        }

    }
    if(arr2.length <= 0){
        console.log('Empty')

    }else{
        console.log(arr2.join(' '))
    }

}

addAndRemove(['remove', 'remove', 'remove'])
