var express = require("express"),
    exphbs = require("express-handlebars"),
    bodyParser = require("body-parser"),
    app = express(),
    PORT = process.env.PORT || 8080;

var db = require("./app/models");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.set('views', './app/views')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

app.use(express.static("./app/public"));

// require routes here

require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

//Sync models with the database and start the Express app

db.sequelize.sync({force: false}).then(function(){
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
 