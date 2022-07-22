//Classes are templates for creating objects
//It defines structure and behavior for objects
//An object created by the class pattern is called an instance
//A class has a constructor - method called automatically to create an object.


class Student {
    constructor(name,grade) {//special method for creating and initializing an object
        this.name = name;
        this.grade = grade;
    }
}
//'this' is a keyword that was used to set a property of the object to a given value
//'this' also is a special object

//creating an instance of the class (new object) from our pattern
let student = new Student('Antoan','5.50');
console.log(student);


//This is the same like the class above.
//And if we replace result with 'this', we will understand what exact do 'this'
function createStudent(name,grade){
    let result = {};

    result.name = name;
    result.grade = grade;
    return result;
}
createStudent()


//let myStudent = new createStudent('Antoan',6.00);
let myStudent = createStudent('Antoan','6.00')
//and here it returns 'this' special object to myStudent object
let myStudent2 = createStudent('Nadia',"5.00");
//myStudent and myStudent2 is total different objects.
console.log(`Students name: `,myStudent.name)
console.log(`Students grade: `,myStudent.grade)
console.log(myStudent)
console.log(myStudent2)
