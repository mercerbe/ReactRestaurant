'use strict';

require('../spec-helper');

var expect = require('chai').expect
  , employeeFinder = require('../../lib/employee-finder')
  , Restaurant = require('../../models/employee')
  , spiderMan = {
      "_id": "1111702403e641a82afe1111",
      "restaurantName": "Spider-Man",
      "restaurantUrl": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg",
      "phoneNumber": "+14155559610"
    }
  , ironMan = {
      "_id": "2222702403e641a82afe2222",
      "restaurantName": "Iron Man",
      "restaurantUrl": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg",
      "phoneNumber": "+14155559368"
    }
  , wolverine = {
      "_id": "3333702403e641a82afe3333",
      "restaurantName": "Wolverine",
      "restaurantUrl": "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf.jpg",
      "phoneNumber": "+14155559718"
    }
  , restaurants = [
      spiderMan,
      ironMan,
      wolverine
  ];

describe('employee-finder', function () {

  beforeEach(function (done) {
    Restaurant.remove({}, function() {
      Restaurant.create(restaurants, function(err, result) {
        done();
      });
    });
  });

  describe('#findById', function () {
    it('finds restaurant by id', function () {
      employeeFinder.findById('1111702403e641a82afe1111', function(err, doc) {
        expect(doc.restaurantName).to.equal('Spider-Man');
      });
    });
  });

  describe('#findByName', function () {
    it('finds restaurant by name', function () {
      restaurantFinder.findByName('name', function(err, docs) {
        expect(docs).to.include(spiderMan);
        expect(docs).to.include(ironMan);
      });
    });
  });

});
