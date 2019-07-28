// Dependencies
require('dotenv').config();
var express = require("express");
var api = require("./app/routing/apiRoutes");
var html = require("./app/routing/htmlRoutes");
// Sets up the Express App
var app = express();
let PORT = process.env.PORT;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

api(app);
html(app);

app.listen(PORT, function() {
    console.log("Server listening on " + PORT);
});

