function demo() {
    //Legacy Variable Declaration is with var
    //Since ECMAScript2015 variables are declared with let
    //var introduces function scope hoisting!!!!
    console.log(y);//with var we have function scope and this will work! This is variable hoisting!
    console.log(y++);//and we can increment it but we are outputting NaN ( not a number )
    if (true) {
        let x = 5;
        var y = 5;
        x++;//pre-incrementation
        ++x;//post-incrementation
        console.log(x)
    }
    // console.log(x);//because it is out of the scope! And we are using let
    console.log(y);//this will work because we are using var and we are out of the initial 'if' scope
}
demo()

// LastName -> Pascal case
// last_name -> Snake case
// last-name -> Kebab case
// lastName -> Camel case


function solve(){
    // typeof is an operator
    console.log(typeof '')
    console.log(typeof 'John')
    console.log(typeof 0)
    let n = 5;
    if(typeof(n) === "number"){
        console.log("yes")
    }else{
        console.log('no')
    }
}
solve()


function indexing(){
    let name = "George";
    console.log(name[0])//this is indexing operator
    //length is a property specified only for strings and arrays
    console.log(name.length)//this last symbol of one string is on length-1 offset from the first index on the current string
}
indexing()

function immutable(){
    let name = "George";
     name[0] = "P";
    console.log(name);//string can't be modified. We can modify only the value of the variable.

    let a = "Peter ";
    a+="Johnson";//this is concatenation!
    console.log(a)
}
immutable()


function interpolation(){
    let name = "Rock"
    let age = 18;
    console.log(`${name} = ${age}`);
    // this is interpolation using backtick
}
interpolation()
