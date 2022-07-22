function amazingNumbers2(num) {
    //with String Manipulator called includes
    //includes() is a method who determine whether one string can be found within another String
    // and it returns Boolean expression
    num = num.toString()
    //    or
    //     num = String(num);
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);

    }
    let result = sum.toString().includes("9");
    console.log(result ? `${num} Amazing? True` : `${num} Amazing? False`);

    let test = 'abcd';
    if (test.includes('a')) {
        console.log("yes")
    } else {
        console.log('no')
    }

}

amazingNumbers2(1299)
amazingNumbers2(999)
