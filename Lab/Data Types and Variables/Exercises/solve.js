function solve(){
// What is Data Type
//This is classification that specified for one peace of data what operations can be applied to it
//And how this data are stored.
//We have six primitive data types since ECMAScripts 2015
//Six Primitive: Boolean, Number, String, Symbol, undefined, BigInt
//Objects: Functions, Arrays, null
//ECMAScript is a JavaScript standard meant to ensure the INTERoperability of web pages across different web browsers
//BigInt is a big integer digit that is infinity big


//We create one variable. This is called literal from literally(буквално)
    let number = 10;//number literal depending on the value
    let person  = {name:"Antoan", age:17}//this is Object and theirs literal is {}
    let arr  = [1,2,3]//this is Array and theirs literal is []
    let isTrue = false;//this is Boolean and theirs literal is true or false
    let name = "Antoan";//this is String and theirs literal is ""
    let empty = null;//this is null and theirs literal is null
    let literallyNothing;//this is a variable with no value ---> undefined is the current data type

//    On the variables we didn't write any data type
//    On JavaScript is Dynamic Typing
    let foo = 42;
    foo = "Antoan";
    foo = true;
    console.log(foo)
}
solve()
