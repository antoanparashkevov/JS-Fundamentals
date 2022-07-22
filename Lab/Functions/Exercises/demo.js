//A function is named subprogram designed to perform particular task
//A method is a function but with different name as we can see. Other words describing the concept of functions are
//subroutine and procedure.
//functions are executed when they are called. This is known as invoking a function ( призоваване )
//values can be passed into functions and used within the function ( arguments )
function printStart(count) {//with name (camelCase)
    console.log("*".repeat(count))
}

printStart(5)
//we use functions because we make our code more manageable and splits large problems into small pieces
//and better organization
//improves code readability and understandability
//avoid repeating code

//declaring function

//function declaration
function printText1(text) {
    console.log(text)
}

printText1('Hello')

//function expression(anonymous function) we don't have identity
let printText2 = function (text) {
    console.log(text)
}
printText2('Hello world');

//Self-invocation ( recursion )
function countDown(x) {
    console.log(x);
    if (x > 0) {
        countDown(x - 1)
    }
}

countDown(5)

//return value can be assigned to a variable like bellow example
//also it used in expression -> let total = getPrice() * quantity * 1.20;
//passed to another function -> multiply(getMax(5,10),20)

function sum(a, b) {
    return a + b;
}

let result = sum(3,5);
console.log(result);

//arrow functions are special shorthand syntax for declaration.
//This function are applied in functional programming.
let increment = x => x+1;//=>  is arrow. Read like x goes to x+1;
console.log(increment(5));//arrow == lambda == anonymous
//the same like
let increment1 = function(x){
    return x+1
}
console.log(increment(5))

let sum1 = (a,b)=> a+b;
console.log(sum1(5,6));

let something = ()=>{};
let check = typeof(something())
console.log(check)
