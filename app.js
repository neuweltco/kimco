var express = require ('express');
const port = process.env.PORT || 3000; //use available port or 3000
var controller = require ('./controllers/controller');
var path = require('path');  //file and directory paths utilities

var app = express();
app.set('views', path.join(__dirname, 'views'));    //builds path to views folder Returns .dir of executing script
app.set('view engine', 'ejs');                     //set up template engine
app.use(express.static('public'));                //static files eg. img, css, js
controller(app);                                 //fire controllers
app.listen(port);                               //use constant port 3000
console.log('Listening to port 3000');
