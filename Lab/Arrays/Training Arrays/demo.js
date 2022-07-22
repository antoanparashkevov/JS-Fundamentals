//this [] is literal for arrays
//this [n] is index operator
console.log(`Switch loop with Arrays`);

function arraySwitching(arr) {
    //we can't use switch with arrays
    switch (arr) {
        case arr[0]:
            console.log('it works switch loop for arrays')
            break;
        default:
            console.log("it doesn't work switch loop for arrays")
    }
}

// arraySwitching([1, 2, 3, 4, 5])

console.log(`Basic indexations Part 1`)

function basicIndexations1() {
    let arr2 = ['a', 'b', 'c'];
    arr2[4] = 60;
    console.log(`the type of non-existing element of one array is undefined`)
    console.log(arr2[3]);//doesn't exist on this index any variable --> undefined type
    //if we add a negative index, we doesn't change the length of the array
    console.log('Bellow we add negative index that convert added element from Number to String')
    //also negative indexes are invalid index and this index converts to string and under the array it creates string variable
    arr2[-4] = 8;
    //the only property who arrays have are .length
    console.log(arr2.length);
    console.log(arr2);
}

// basicIndexations1()

console.log('Basic Array Methods Part 1')
function basicMethods1() {
//arrays are special objects that have built-in methods like

//join,split,includes,splice,pop,shift,unshift,push,toString,slice,fill,map,forEach,filter
//who can access it with dot notation

    console.log('includes() array method')
    //includes() returns Boolean Expression
    let arr3 = [10, 20, 30];
    console.log(arr3.includes(20));
    console.log(arr3.includes(20, 3));//start from third index

}

// basicMethods1()

console.log('Basic Array Methods Part 2')

function basicMethods2() {
    //join() converts from array to string and we can put separator -> join("-")

    console.log('join() array method')
    let array = [1, 2, 3, 4, 5]
    let toStr = array.join(' - ')

    console.log(array)
    console.log(toStr)

    console.log('split() array method')
    //split() converts from string to array and we can put separator -> split("-")
    let niz = 'abcd'
    let arr6 = niz.split('');
    console.log(niz)
    console.log(arr6)

    console.log('splice() array method');
    //splice() changes the content of an array by removing or replacing existing elements or adding new elements

    console.log('splice() Part 1. Only replace on index 3')
    let notSplicedArray1 = [1, 2, 3, 3, 5, 6, 7];
    console.log(notSplicedArray1);
    notSplicedArray1.splice(3, 0, 4)
    console.log(notSplicedArray1);
    console.log('splice() Part 2. Replace and delete one item from index 3')
    let notSplicedArray2 = [1, 2, 3, 3, 5, 6, 7];
    console.log(notSplicedArray2)
    notSplicedArray2.splice(3, 1, 4)
    console.log(notSplicedArray2);
    console.log('splice() Part 3. Replace two items(one number and one string) and delete two items from index 3')
    let notSplicedArray3 = [1, 2, 3, 3, 3, 5, 6];
    console.log(notSplicedArray3)
    notSplicedArray3.splice(3, 2, 4, 'antoan');
    console.log(notSplicedArray3);


}

basicMethods2()

console.log('Basic Array Methods Part 3');

//Introducing maps and fill
//Bonus - > What is Array() Constructor?

function basicMethods3() {
    //fill() method changes all elements in an array to a static value
    //from a start length(second arg)->included to an end length(third arg)->not included
    //with any value(first arg)
    let customArr = [3, '0 1',
        '0 right 1',
        '2 right 1'];
    console.log('fill() method.');

    let field = Array(customArr[0]).fill(0);
    console.log(field)

    console.log('Array() constructor.')

    //Array() class is a global object who can make constructions of arrays
    //This class accept one argument. This is the length of our array, not index,LENGTH!
    let test1 = Array(3);
    console.log(test1)
    let test = Array(3).fill(2)
    console.log(test)

    //map() method creates new array populated with the result of calling a function on every element on calling array(cArray)
    //callback function. In our case the function is arrow function
    console.log('map() method.')
    let cArray = [1,4,8,16]
    let map1 = cArray.map(x=>x*2);
    console.log(map1);
}

// basicMethods3()



function shiftAndPop(arr) {
    console.log('pop() Array Method')
    //pop() removes last element from an array and keep that value in variable
    console.log(arr);
    let someVar = arr.pop();
    console.log(someVar);

    console.log('shift() Array Method');
    //shift() removes the first element from an array and keep that value in variable
    console.log(arr);
    let someVar2 = arr.shift();
    console.log(someVar2);

    console.log(arr)

    console.log('unshift() Array Method')
    //unshift() method adds one or more elements to the beginning of an array and returns the new length of the new array.
    arr.unshift(1, 2, 3);
    console.log('The length of the new array with unshift() method is -> ' + arr.unshift())//expected output - > 7,because that is the length of the new array
    console.log(arr);//1,2,3 is the new values in the beginning of the array

    console.log('push() Array Method')
    //push() method add one or more element to the end of an array and returns the length of the new array.
    let testArray = [1, 2, 3, 4];
    testArray.push(5, 6, 7);
    console.log('The length of the new array with push() method is -> ' + testArray.push())
    console.log(testArray)

}

shiftAndPop(['antoan', 'nadia', 'poli', 'kamen', 'pavel', 'dimitar'])


