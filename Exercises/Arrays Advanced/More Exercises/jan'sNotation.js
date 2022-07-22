function janSNotation(array) {
    let nums = [];
    let operandsMap = {
        '+':(a,b)=>a+b,
        '-':(a,b)=>a-b,
        '/':(a,b)=>a/b,
        "*":(a,b)=>a*b
    }
    for(let i = 0;i<array.length;i++){
        if(typeof array[i] === 'number'){
            nums.push(array[i])
        }else{
            if(nums.length<2){
                console.log("Error: not enough operands!");
               break;
            }else{
                let b = nums.pop()
                let a = nums.pop()
                nums.push(operandsMap[array[i]](a,b));
            }
        }
    }
    if(nums.length!==1){
        console.log('Error: too many operands!');
    }else{
        console.log(nums[0])
    }
}

janSNotation(
    [
        3,
        4,
        '+'
    ]
)
