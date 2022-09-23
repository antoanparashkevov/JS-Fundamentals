//IMPORTANT
//Node.js has a library with built-in modules.
//one of this is the file system that allows us to create a file or reading a file
let fs = require('fs')


//creating a file.
fs.writeFileSync('./text.txt', "Hello World!")

//reading a file.
let data = fs.readFileSync('./text.txt')
console.log(data)//return as Buffer

console.log(data.toString())//return as a String

let myData = [10,20,30]
fs.writeFileSync('./data.json',JSON.stringify(myData))//from array to JSON string

//if we want to store/write data into one place is called Serialization
//if we want to read data from one place is called Deserialization

let myData2 =JSON.parse(fs.readFileSync('./data.json'))//from JSON string to Array
console.log(myData2[0])
console.log(myData2)

fs.unlinkSync('./text.txt')//to delete a file

//if my cursor goes next to the word, if we type Option + BackSpace to delete it
