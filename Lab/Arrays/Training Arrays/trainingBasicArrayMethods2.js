function trainingBasicArrayMethods2(){
    let arr=[3,'pavel','nadia'];
    //fill() is used only with arrays. This method changes all elements in an array to a static values
    let field = Array(arr[0]).fill(0);
    console.log(field)

    let arr1 = [1,2,3,4,5,6,7];
    console.log(arr1);

    //fill(value,start length,end length)
    console.log(arr1.fill(1,1,7));

    let test1 = Array(2);
    console.log(test1)//--> 2 empty items
    console.log(typeof(Array))//--> function

    let test2 = Array(3).fill(0)
    console.log(test2)


    //map accept callback function ( arrow function, callback function, inline callback function.
    //In our case we put arrow function
    let cArray = [1,4,8,16]
    let map1 = cArray.map(x=>x*2)
    console.log(map1)//this is brand new array
    console.log(cArray)//this is still living


}
trainingBasicArrayMethods2()
