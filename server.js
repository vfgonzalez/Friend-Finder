var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')

// middleware
app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.urlencoded({extended: true}))//allows nested data such as objects and arrays
app.use(bodyParser.json({type : 'application/**json'}))
app.use(bodyParser.raw({type : 'application/vnd.custom-type'}));
app.use(bodyParser.text({ type : "text/html"}))



require("./app/routing/apiRoutes.js")(app);

require("./app/routing/htmlRoutes.js")(app);







var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e
  console.log("App listening on port: "+ PORT)
})
