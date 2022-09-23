let phoneBookController = require('./controllers/phonebookController')

module.exports = (app)=>{
    app.get('/',phoneBookController.index)
    app.post('/add',phoneBookController.addPhoneBookPost)
}
