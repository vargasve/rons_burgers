//dependencies 
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var connection = require("./config/connections.js");
var handleBars = require("express-handlebars");
var app = express();

// heroku compatible port setup
var PORT = process.env.PORT || 8080;
app.use("/static", express.static("public")); 

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
app.use('/add', routes);
app.use('/devour', routes);
app.use('delete', routes)


app.listen(PORT, function(){
  console.log("Listening on %s", PORT);
});