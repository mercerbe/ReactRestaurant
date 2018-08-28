'use strict';

var Restaurant = require('../models/restaurant')

var findByName = function(name, callback) {
  Restaurant.find({
    "restaurantName": {
      "$regex": name, "$options": "i"
    }
  }, callback).sort("restaurantName")
};

var findById = function(id, callback) {
  Restaurant.findOne({
    "_id": id
  }, callback)
}

module.exports.findByName = findByName

module.exports.findById = findById
