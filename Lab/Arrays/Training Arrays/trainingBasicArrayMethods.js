function trainingBasicArrayMethods(){
    console.log('pop()')
    //pop() method removes the last element of the array and returns that element.
    let arr1= [1,2,3,4,5]
    console.log(arr1)
    let returnedValue = arr1.pop();
    console.log('The element from pop() -> ' +returnedValue)
    console.log(arr1)

    console.log('shift()')
    //shift() removes the first element of the array and returns that element.
    let arr2=[1,2,3,4,5,6];
    let returnedValue2 = arr2.shift();
    console.log('The element from shift() -> ' +returnedValue2)
    console.log(arr2)

    console.log('unshift()');
    //unshift() add one or more elements to the beginning of the array and return the new Array length
    let arr3=[4,5]
    console.log(arr3);
    let returnedValue3 = arr3.unshift(1,2,3);
    console.log('The new length from unshift() -> ' +returnedValue3)
    console.log(arr3);

    console.log('push()');
    //push() add one or more elements to the end of the array and return the new Array length
    let arr4=[1,2,3,4,5];
    console.log(arr4)
    let returnedValue4 = arr4.push(6,7,8);
    console.log('The new length from push() -> ' +returnedValue4)
    console.log(arr4);
}
trainingBasicArrayMethods()
