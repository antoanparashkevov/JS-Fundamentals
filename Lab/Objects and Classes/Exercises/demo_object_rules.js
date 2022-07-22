//we can put either functions, or arrays as property of one object
//with function expression
//sayHello is the property of person object
let person = {
    sayHello: function(){
        console.log('Hi, guys FROM PERSON!');
    }
}
let person1 = {
    sayHello1(){
        console.log('Hi, guys FROM PERSON1!')
    },
    name: "Nadia",

}
console.log(person)//not like that if we have only functions in our object
console.log(person['sayHello'])//not like that with functions
person.sayHello()//like that
console.log(person1)//not like that
person1.sayHello1()
console.log(person1.name)

let person2 = {
    name:"Peter"
}
person2.sayHello3 = ()=> console.log('Hello from person3')


person2.sayHello3()//Print Hello


