'use strict';

var expect = require('chai').expect
  , twimlGenerator = require('../../lib/twiml-generator')
  , cheerio = require('cheerio');

describe('twiml-generator', function () {

  describe('#notFound', function () {
    it('generates TwiML response when restaurant query gets nothing', function () {
      var twimlResponse = twimlGenerator.notFound();
      var $ = cheerio.load(twimlResponse.toString());
      expect($('Message').text()).to.equal('We did not find the restaurant you\'re looking for');
    });
  });

  describe('#singleEmployee', function () {
    it('generates TwiML response with restaurant content', function () {
      var restaurant = {
        'restaurantName' : 'Thor',
        'restaurantUrl' : 'http://i.imgur.com/kXi5u8w.jpg',
        'phoneNumber' : '+14155559999'
      };

      var twimlResponse = twimlGenerator.singleEmployee(restaurant);
      var $ = cheerio.load(twimlResponse.toString());
      expect($('Message Body').text()).to.equal('Thor\n+14155559999\nthor@asgard.example.com');
    });
  });

  describe('#multipleEmployees', function () {
    it('generates TwiML response for multiple restaurants', function () {
      var restaurants = [
        {
          'option': 1,
          'restaurantName' : 'Thor'
        },
        {
          'option': 2,
          'restaurantName' : 'Spider-man'
        },
        {
          'option': 3,
          'restaurantName' : 'Wolverine'
        }
      ];

      var twimlResponse = twimlGenerator.multipleRestaurants(restaurants);
      var $ = cheerio.load(twimlResponse.toString());
      expect($('Message').text()).to.equal(
`We found multiple restaurants, reply with:
1 for Thor
2 for Spider-man
3 for Wolverine
Or start over`);
    });
  });
});
