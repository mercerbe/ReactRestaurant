'use strict'

var mongoose = require('mongoose')

var Restaurant = new mongoose.Schema({
  restaurantName: String,
  phoneNumber: String,
  restaurantUrl: String
});

module.exports = mongoose.model('restaurant', Restaurant)
