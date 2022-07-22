function personInfo(firstName, lastName, age) {
    // return {firstName: firstName, lastName: lastName, age: age};
    //or with composition when properties are with the same name like values
    let result = {
        firstName,
        lastName,
        age
    }
    return result;
}

personInfo("Peter",
    "Pan",
    "20"
)
console.log(personInfo('Peter', "Pan", "20"))
