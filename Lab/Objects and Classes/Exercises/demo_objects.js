//Objects are structure of related data or functionality
//Contains values and accessed by string keys
//Object-literal is {}

//- data values are called properties
//- function values are called methods
//- we can add and remove properties during runtime

//Object by default is
// "name" - > "Peter"
// "age"  - > "20"
//in this example, name and age are properties, Peter and 20 are values of these properties.

let person = {
  name: "Peter",
  age: 20,
  height: 183,
};

//we can access a specific property like this (it returns the value of the specific property)
console.log(person.name); //Peter
//or like this but don't forget to put the property inside quoutes
console.log(person['name']); //Peter

//we can modify a value of a specific property
person.age++;//21
person.age = 25;
console.log(person.age)//we will see the new value of this property


//We can define an empty object and add properties later.
let person1 = {};

console.log(typeof person1);//object

person1.hairColor = "black";//we add a specific property like this
person1.age = 20;


person1.name = "Peter";
//or
person1["name"] = "Antoan";

console.log(`all properties/values of person1`, person1);


let propName = "age";//this is a string variable
console.log(person[propName]); //we can access a property like this,
//but inside [] we must have variable who has string inside it

person1.age = propName;//we set value to be 'age'
console.log(person1.age);//'age'

