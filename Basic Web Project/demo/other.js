//const add = require('./demo')
//and because in demo.js we are defining more than one function inside module.export method,

//we must destructuring an object like this
const {add} = require('./demo')
console.log(add(7, 11))

//or define the whole object
const api = require('./demo')
console.log(api.product(7, 11))
