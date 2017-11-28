'use strict';
module.exports = function(app) {
  var highScores = require('../controllers/highScoresController');

// Saves a user top score.
  app.route('/5inarow/score')
    .post(highScores.savetopscore);

// Gets the top scores of all users between two specific dates.
  app.route('/5inarow/gettopscores')
    .get(highScores.gettopscores);

// Gets the highest score of a user.
  app.route('/5inarow/gethighscore')
    .get(highScores.gethighscore);

// Calculates a score based on the number of moves. Does not interact with DB.
  app.route('/5inarow/calculatescore')
    .get(highScores.calculatescore);
};
