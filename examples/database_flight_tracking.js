var Flights = require('../index');
var config = require('./config');

var data = {
  FROM: 'PDX',
  TO: 'JFK',
  DEPART_DATE: '2016-06-01',
  SAVE_TO_DATABASE: true,
  CONFIG: config
};

var CurrentFlight = new Flights(data);
