var express = require("express");
var path = require("path");

function htmlRoutes(app){
    //survey path
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    // catch all the other entries
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}

module.exports = htmlRoutes;