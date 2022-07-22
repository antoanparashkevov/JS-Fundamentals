//Object has built-in method libraries of JavaScript
//.keys gives us the key names of our objects and returns an array of it
//.values gives us the values of our objects and returns an array of it
//.entries gives us an array of arrays who has key-value pair of each array
let person1 = {
  name: "Nadia",
  age: 21,
  studying: "Sofia University",
};
let keys = Object.keys(person1);
console.log(`properties of the object`, keys);
let values = Object.values(person1);
console.log(`values of the object`, values);

//we can loop through the key names of an existing object
for (let key of keys) {
  // console.log(key)
  console.log(`Property -> ${key}, \nValue -> ${person1[key]}`);
}

//get an array of all properties as key-value pairs (KVP). It returns an array of arrays
let allThingsINonePlace = Object.entries(person1);
console.log(`Keys and Values`, allThingsINonePlace);

let person2 = {
  name: "Antoan",
  age: 22,
  study: "Sofia University",
};
//make a copy from person2 object to new variable person3
// let person3 = Object.assign({secondStudying:'Softunu'}, person2);
let person3 = Object.assign({}, person2);
//it put properties && values into our target(first argument of assign method)
console.log(person3); //the same like person2

//we can delete some property/value from object
delete person3.name;
console.log(person3);

//hasOwnProperty() method returns Boolean indicating
//whether the object has a specific property as its own property
let person4 = {};
person4.name = "Antoan";
console.log(person4.hasOwnProperty("name"));
console.log(person4.hasOwnProperty("age"));

let person5 = {
  name: "Antoan",
  age: 22,
  study: "Sofia University",
  work: "As programmer",
  from: "Pleven",
  life: "In Sofia",
  relationships: "With Nadia",
};
let listOfPersons = [];

  listOfPersons.push(person5);
  listOfPersons.push(person4);
  
console.log(`List of two persons: `,listOfPersons);

let university="Sofia University";

//find() is a method who find through all elements from one array
//It retuns the first element from the provided array who satisfies the condition in the callback Function
//If no values satisfy the testing function, it returns undefined.
//In our case, it returns an object(that is the element of the array) who satisfy the value from study property
let find = listOfPersons.find((element)=>element.study === university);
console.log(`Returns the satisfy object`,find)
console.log(`Returns only one property from the satisfy object:`,find.name)
