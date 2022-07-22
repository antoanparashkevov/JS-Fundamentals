// function employees(input) {
//     let everyEmployee = {};
//   for(let employee of input){
//         everyEmployee.name = employee;
//         everyEmployee.personalNumber = employee.length
//         console.log(`Name: ${everyEmployee.name} -- Personal Number: ${everyEmployee.personalNumber}`);
//   }
// }
// employees([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

// function employees(input) {
//     let everyEmployee = {};
//     class Employees{
//         constructor(name, personalNumber){
//                 this.name = name;
//                 this.personalNumber = personalNumber;
//         }
//     }
    
//   for(let employee of input){
//        everyEmployee = new Employees(employee, employee.length);
//         console.log(`Name: ${everyEmployee.name} -- Personal Number: ${everyEmployee.personalNumber}`);
//   }
// }
// employees([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);

function employees(input) {
    let listOfEmployees = [];//start from array
    class Employees{
        constructor(name, personalNumber){
                this.name = name;
                this.personalNumber = personalNumber;
        }
    }
    
  for(let employee of input){
       let everyEmployee = new Employees(employee, employee.length);
       console.log(everyEmployee)
       listOfEmployees.push(everyEmployee)
        // console.log(`Name: ${everyEmployee.name} -- Personal Number: ${everyEmployee.personalNumber}`);
  }
//   console.log(listOfEmployees)
  listOfEmployees.forEach((el) => {
    console.log(`Name: ${el.name} -- Personal Number: ${el.personalNumber}`);
  });
}
employees([ 'Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);