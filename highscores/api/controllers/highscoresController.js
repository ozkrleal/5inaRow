'use strict';


var mongoose = require('mongoose'),
  Game = mongoose.model('Game');

/*
exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

*/

exports.savetopscore = function(req, res) {
  var new_game = new Game();
  new_game.username =  req.body.userName;
  new_game.score = req.body.numberOfMoves;

  
  console.log(new_game);
  new_game.save(function(err, game) {
    if (err)
      res.send(err);
    else {
      Game.findOne({username: req.body.userName}).sort('-score').exec(function(err, score) {
        res.json(score);
      });
    }
  });
};

/*
exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
  
};
*/