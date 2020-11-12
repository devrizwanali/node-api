const mongoose = require('mongoose');

const AFC = mongoose.Schema({
  afcDivision: {
    type: String,
    required: true
  },
  teamName: {
    type: String,
    required: true
  },
  numberOfWins: {
    type: Number,
    required: true
  },
  numberOfLoses: {
    type: Number,
    required: true
  },
  numberOfTies: {
    type: Number,
    required: true
  },
})

module.exports = mongoose.model('AFC', AFC);
