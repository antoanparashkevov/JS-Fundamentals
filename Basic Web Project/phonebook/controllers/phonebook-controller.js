const phonebook = require('../phonebook');

module.exports = {
    index: (req, res) => {
        let contacts = phonebook.getData()
        res.render('index', {contacts: contacts});
        // TODO: load index page
    },
    addPhonebookPost: (req, res) => {
        phonebook.saveContact(req.body.name, req.body.number)
        res.redirect('/')
        // TODO: add a phonebook object to the array
    }
}
