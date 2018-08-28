'use strict';

var MessagingResponse = require('twilio').twiml.MessagingResponse,
  _ = require('underscore');

var notFound = function() {
  var resp = new MessagingResponse();
  resp.message('We did not find the employee you\'re looking for');
  return resp;
};

var singleRestaurant = function(restaurant) {
  var resp = new MessagingResponse();
  var message = resp.message();
  message.body(`${restaurant.restaurantName}\n${restaurant.phoneNumber}\n${restaurant.email}`);
  message.media(restaurant.restaurantUrl);
  return resp;
};

var multipleRestaurants = function(restaurants) {
  var resp = new MessagingResponse();
  var optionsMessage = _.reduce(restaurants, function(memo, it) {
    return memo += `\n${it.option} for ${it.restaurantName}`;
  }, '');

  resp.message(`We found multiple restaurants, reply with:${optionsMessage}\nOr start over`);
  return resp;
};

module.exports.notFound = notFound;

module.exports.singleRestaurant = singleRestaurant;

module.exports.multipleRestaurants = multipleRestaurants;
