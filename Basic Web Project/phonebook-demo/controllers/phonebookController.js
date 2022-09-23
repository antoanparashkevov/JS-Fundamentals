const phonebook = require('../phoneBookDB')

module.exports={
    index:(req,res)=>{
        let contact = phonebook.getContact();//this will take the whole array
        res.render('index',{contacts:contact})
    },
    addPhoneBookPost:(req,res)=>{
        console.log(req.body)
        // phonebook.saveContact(req.body.name,req.body.number);
        // res.redirect('/')
    }
}
