/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/

let Contact = require('./models/Contact');

let phonebook = [
    new Contact('Peter','0877268727'),
    new Contact('Antoan','0877675364')
]

function getData(){
    return phonebook
}
function saveContact(name,number){
    let contact = new Contact(name,number)
    phonebook.push(contact)
}

module.exports={
    getData,
    saveContact
}
