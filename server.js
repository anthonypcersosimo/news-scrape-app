const express = require("express");
const exphbrs = require("express-handlebars");
const bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

const app = express();

const router = express.Router();
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Static directory
app.use(express.static("public"));
app.use(express.json());
app.use(router);

// Connect handlebars to Express
app.engine("handlebars", exphbrs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));

// Requiring our models for syncing
// const db = require("./models");

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});