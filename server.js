var express = require("express"),
    exphbs = require("express-handlebars"),
    bodyParser = require("body-parser"),
    app = express(),
    methodOverride = require("method-override"),
    PORT = process.env.PORT || 8080;

var db = require("./app/models");

// app.set('views', './app/views');
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

app.use(methodOverride('_method'));

app.use(express.static("./app/public"));

// require routes here

require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);
require("./app/routes/package-routes.js")(app);

// app.use("/vendors", apiRoutes);

//Sync models with the database and start the Express app

db.sequelize.sync({force: false}).then(function(){
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
 