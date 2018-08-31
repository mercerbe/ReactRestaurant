'use strict';

var mongoose = require('mongoose')
  , config = require('./config')
  , Restaurant = require('./models/employee')
  , restaurants = require('./restaurants')
  , _ = require('underscore');

mongoose.connect(config.dbConnection, function(err) {
  if (err) throw new Error(err);

  Restaurant.remove({}, function() {
    Restaurant.create(restaurants, function(err, result) {
      if (err) throw new Error(err);
      console.log('Data loaded succesfully!');
      mongoose.disconnect();
    });
  });
});
