'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var Integer = Schema.Types.Integer;



var PlayerSchema = new Schema({
  player_id: {
    type: ObjectId
  },
  username: {
    type: String
  },
  highestScore: {
    type: Number
  }
});


var GameSchema = new Schema({
  username: {
    type: String
  },
  score: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Player', PlayerSchema);
module.exports = mongoose.model('Game', GameSchema);