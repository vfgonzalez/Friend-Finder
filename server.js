var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')

// middleware
app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyparser.urlencoded({extended: true}))//allows nested data such as objects and arrays
app.use(bodyparser.json())


require('./routing/apiRoutes.js')(app)

require('./routing/htmlRoutes.js')(app)







var PORT = process.env.PORT || 3000
// listening port
app.listen(PORT, function (e) {
  if (e) throw e
})
