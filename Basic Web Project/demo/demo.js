//module===file
//this is how to create a module
function add(a,b){
    return a+b;
}
// console.log(add(3,5))
function product(a,b){
    return a*b;
}

//we can export not only functions
let someVar = 10;


//just like this function goes public (exporting outside of the file)
//we can use this function in other places except this file(demo.js)
// module.exports = add;

//we want to export more than one function
//because of the intellisense, module and require are highlighted.
module.exports = {
    add,
    product,
    someVar
}


