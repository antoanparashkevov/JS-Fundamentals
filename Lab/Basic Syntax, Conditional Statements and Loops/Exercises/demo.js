// let a = 5;
// let b = 3;
//
// console.log(a+b);

function solve(name, grade){

    console.log(`The name is ${name}, the grade is ${grade.toFixed(2)}`);
    //this is interpolation. With placeholders we put the variable and we use backtick

    //with toFixed method we format a number and we convert it to string
    // grade.toFixed(2);

    console.log('The name is ' + name + ', the grade is ' + grade);
    //this is concatenation
}
solve("Antoan",12,5456);
