const express = require('express');
const handlebars = require('express-handlebars').create;
const routing = require('./routing')
let port = 3000;

let app = express();
app.engine('.hbs',handlebars({
    extname:'.hbs'
}).engine)

app.set('view engine','.hbs');
app.use(express.static('public'));

// app.get('/',(req,res)=>{
//     res.send('Hello world')
// });

routing(app);

app.listen(port,()=>console.log('Listening on port',port))
