'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PlayerSchema = new Schema({
  player_id: {
    type: ObjectId
  },
  username {
    type: String
  },
  highestScore: {
    type: Integer
  }
});


var GameSchema = new Schema({
  game_id: {
    type: ObjectId
  },
  username {
    type: String
  },
  score: {
    type: Integer
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Player', PlayerSchema);
module.exports = mongoose.model('`Game', GameSchema);