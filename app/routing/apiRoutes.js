var path = require("path")
var friends = require("../data/friends.js")
/*
Your apiRoutes.js file should contain two routes:



A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 


*/
module.exports = function(app){
    app.get("/api/friends",function(req,res){
        res.json(friends)
    })

    app.post("/api/friends",function(req,res){
       
       var bestMatch = {
           name: "",
           photo: "",
           friendDifference : 1000
       };
       console.log(req.body);
       
       var userData = req.body;
       var userScores = userData.scores;

       console.log(userScores);

       var totalDifference = 0;

       for (var i = 0; i < friends.length; i++){
           console.log(friends[i]);
           totalDifference = 0 ;
        //    loop through all scores of each friend
            for( var j = 0; j < friends[i].scores[j]; j++){
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                
                if (totalDifference <= bestMatch.friendDifference){
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }

            }
        }
        friends.push(userData);
        res.json(bestMatch);
});

}

   