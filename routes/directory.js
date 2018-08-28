'use strict';

var express = require('express')
  , router = express.Router()
  , twilio = require('twilio')
  , restaurantFinder = require('../lib/restaurant-finder')
  , _ =  require('underscore')
  , twimlGenerator = require('../lib/twiml-generator');

// POST /directory/search/
router.post('/search/', function(req, res, next) {
  var body = req.body.Body;
  res.type('text/xml');

  if (req.cookies.cachedRestaurants !== undefined && !isNaN(body)) {
    var cachedRestaurants = req.cookies.cachedRestaurants;
    var restaurantId = cachedRestaurants[body];
    if (restaurantId === undefined) {
      res.send(twimlGenerator.notFound().toString());
    } else {
      restaurantFinder.findById(restaurantId, function(err, restaurant) {
        res.clearCookie('cachedRestaurants');
        res.send(twimlGenerator.singleRestaurant(restaurant).toString());
      });
    }
  } else {
    restaurantFinder.findByName(body, function(err, restaurants) {
      if (restaurants.length === 0) {
        res.send(twimlGenerator.notFound().toString())
      } else if (restaurants.length === 1) {
        res.send(twimlGenerator.singleEmployee(restaurants[0]).toString())
      } else {
        var options = _.map(restaurants, function(it, index) {
          return { option: index + 1, fullName: it.fullName, id: it.id }
        });
        var cachedRestaurants = _.object(_.map(options, function(it) { return [it.option, it.id]; }))
        res.cookie('cachedRestaurants', cachedRestaurants, { maxAge: 1000 * 60 * 60 })

        res.send(twimlGenerator.multipleRestaurants(options).toString())
      }
    });
  }
});

module.exports = router;
