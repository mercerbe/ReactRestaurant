'use strict'

var config = {}

var dbConnection = function() {
  if (process.env.NODE_ENV === 'test') {
    return 'mongodb://localhost/test'
  }
  return 'mongodb://localhost/restaurant-directory'
}

config.dbConnection = dbConnection()

module.exports = config
