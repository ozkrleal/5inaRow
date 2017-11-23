'use strict';
module.exports = function(app) {
  var highScores = require('../controllers/highScoresController');

  // High Scores Routes
  //app.route('/5inarow/gettopsscores')
  //  .get(highScores.gettopsscores);


  app.route('/5inarow/score')
    .post(highScores.savetopscore);
  
  //app.route('/5inarow/gethighscore')
  //  .get(highScores.gethighscore);

  //app.route('/5inarow/sendhighscore')
  //  .post(highScores.sendhighscore);

  //app.route('/5inarow/calculatehighscore')
  ////  .post(highScores.calculatehighscore);






};
