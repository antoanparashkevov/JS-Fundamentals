//This is Global Scoping only with var(global variables)
var carMode = "Mercedes"
function scope(){
//This is function scope and only can be accessed in the function(local variables)
    var test = "test";

//This is Block Scope
    {
        let x = 1
    }
    //can't be accessed here!
    // console.log(x)

console.log(carMode)

}
//because it is in the function's scope it can't
// console.log(test)

scope()


