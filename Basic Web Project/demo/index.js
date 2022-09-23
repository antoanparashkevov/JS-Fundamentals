// let add = require('./demo')//this is how to import from file (./demo.js) when we export only one thing
let {add} = require('./demo')//this is how to import from file (./demo.js) when we export more than one stuff (destructuring)
let obj = require('./demo');//we are taking the whole object (module)

console.log(obj.add(5,5))
console.log(add(3,5))
console.log(obj.someVar)
