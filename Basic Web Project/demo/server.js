let fs = require('fs')
//one more of this is HTTP module that allows us to transfer data between server and browser.
let http = require('http')

//we must set a function as a parameter that will processes requests.
//because we want to use this function always when someone goes into our server
let server = http.createServer(handler);
server.listen(3000);

//this is our function that accept a request who come from the browser.
//This request we will processable it and return a response (this is visible from browser as HTML)
function handler(request, response) {
    //we must save a header (FROM HTTP PROTOCOL - IVAYLO LECTURE)
    //    response.writeHead(200);
    // response.write("Hello World")//msg that we want to visualize
    response.write(`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    html{
    background-color: aqua;
    color: purple;
    }
    </style>
</head>
<body>
 <h1>Hello world!</h1>
 <button>Click me</button>
</body>
</html>
`)
    response.end()//we are ready to go
    fs.createReadStream('./index.html').pipe(response)
}

//the whole thing is boilerplate (always is the same code when we configure the project)
