let express = require('express');
let handlebars = require('express-handlebars').create;

let app = express()

app.engine('.hbs',handlebars({
    extname:'.hbs',
}).engine);

app.set('view engine','.hbs');

app.get('/', (req, res) => {
    // res.write('Hello from Main Page')
    // res.end()
    // send() is a combination method of write() & end()
    // res.send(
    //     `
    //     <h1>Hello from Main Page</h1>
    //     <a href="/catalog">Catalog</a>
    //     `
    // )
    res.render('home')
});

let catalogController = require('./controllers/catalogController')

app.get('/catalog',catalogController.catalog);
app.get('/catalog/:productId', catalogController.details);

app.get('/json', (req, res) => {
    res.json({"msg": "Hello world"})
});

app.get('/html', (req, res) => {
    res.send(
        `
    <h1>Welcome to the page!</h1>
    <p>You are awesome men!</p>
        `
    )
});
app.listen(3000,()=>console.log('Listening on port 3000'))
