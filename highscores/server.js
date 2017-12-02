/*var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('5inarow RESTful API server started on: ' + port);

*/
var express = require('express'),
  app = express(),
  port = process.env.HIGHSCOREPORT || 3002
  mongoose = require('mongoose'),
  HighScore = require('./api/models/highscoresModel.js'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/HighScoresdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/highscoresRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('High Scores RESTful API server started on: ' + port);
