let Contact = require('./models/Contacts');

let phonebook = [
    new Contact("Antoan",'0877268727'),
    new Contact("Nadia",'0877268728')
]

function getContact(){
    return phonebook
}

function saveContact(name,number){
    let contact = new Contact(name,number);
    phonebook.push(contact)
}

module.exports={
    getContact,
    saveContact
}

