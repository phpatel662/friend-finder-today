var friends = require("../data/friends").friends;
var express = require("express");

function apiGet(app){   
    //grabbing info from friends array
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    // posting info to friends array
    app.post("/api/friends", function(req, res){
        var newFriend = req.body;
            for (i = 0; i < newFriend.scores.length; i++){
                newFriend.scores[i] = parseInt(newFriend.scores[i]);
            }
        friends.push(newFriend);

        var compat = 100;
        var match = friends[0];
            //finding best match process
            for (i = 0; i < friends.length - 1; i++){
                console.log(newCompat);
                var newCompat = 0;
                for (j = 0; j < newFriend.scores.length; j++){
                    newCompat += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
                }
                if (newCompat < compat){
                    compat = newCompat;
                    match = friends[i];
                }
            }
            res.json(match);
    });
}

module.exports = apiGet;