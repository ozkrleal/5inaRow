'use strict';


var mongoose = require('mongoose'),
  Game = mongoose.model('Game');

// Saves a user top score.
exports.savetopscore = function(req, res) {
  var new_game = new Game();
  new_game.username =  req.query.userName;
  
  // calculating the score from the number of moves. This formula assumes that a random player will
  // use more than 20 moves, a good player less than 10
  var moves = 40;
  if (req.query.numberOfMoves < 40)  
    moves = parseInt(req.query.numberOfMoves);
 
  new_game.score = (40 - moves)*2.5;
  
  if (isNaN(req.query.numberOfMoves))
    res.send("The number of moves is not a number")
  else if (req.query.numberOfMoves < 2)
    res.send("The number of moves for a high score is too low");

  new_game.save(function(err, game) {
    if (err)
      res.send(err);
    else {
      Game.findOne({username: req.query.userName}).sort('-score').exec(function(err, score) {
        res.json(score);
      });
    }
  });
};

// Calculates a score based on the number of moves. Does not interact with DB.
exports.calculatescore = function(req, res) {
  // calculating the score from the number of moves. This formula assumes that a random player will
  // use more than 20 moves, a good player less than 10
  var moves = 40;
  if (req.query.numberOfMoves < 40)  
    moves = req.query.numberOfMoves;
  var score = (40 - parseInt(req.query.numberOfMoves))*2.5;
  if (isNaN(req.query.numberOfMoves))
    res.send("The number of moves is not a number")
  else if (req.query.numberOfMoves < 2)
    res.send("The number of moves for a high score is too low");
  res.json(score);
}

// Gets the top scores of all users between two specific dates.
exports.gettopscores = function(req, res) {
  var dateFrom = new Date(req.query.dateFrom);
  var dateTo = new Date(req.query.dateTo);
  Game.aggregate([
    {
      $match : { date: {$gt: dateFrom, $lt: dateTo}}

    },
    {
      $group : {
        _id: "$username",
        topScore: { "$max": "$score"}
      }
    }], function(err, data) {
      if (err)
        res.send(err);
      else res.json(data);
    });
};

// Gets the highest score of a user.
exports.gethighscore = function(req, res) {
  Game.findOne({username: req.query.userName}).sort('-score').exec(function(err, score) {
    if (err)
      res.send(err);
    else
      res.json(score);
      });
};