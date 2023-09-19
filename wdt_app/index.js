/** @format */

var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: process.env['AMADEUS_CLIENT_ID'],
  clientSecret: process.env['AMADEUS_CLIENT_SECRET'],
});

amadeus.shopping.flightOffersSearch
  .get({
    originLocationCode: 'BOS',
    destinationLocationCode: 'LON',
    departureDate: '2020-08-01',
    adults: '2',
  })
  .then(function (data) {
    console.log(JSON.stringify(data));
  })
  .catch(function (responseError) {
    console.log(JSON.stringify(responseError));
  });
