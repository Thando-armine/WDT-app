var Amadeus = require("amadeus");
var amadeus = new Amadeus({
  clientId: 'quuCkANXusUPoSd1GR2IiA9cNVjDwhQA',
  clientSecret: 'yYOeAj8GYp6usZSw'
});


amadeus.shopping.flightOffersSearch.get({
  originLocationCode: 'SYD',
  destinationLocationCode: 'BKK',
  departureDate: '2022-08-01',
  adults: '2'
}).then(function (response) {
  console.log(response);
}).catch(function (response) {
  console.error(response);
});

// Find the cheapest flights


const originLocationCode = document.getElementById("origin")
const destinationLocationCode = document.getElementById("depart")
const departureDate = document.getElementById("departure-date")


const API_KEY = "quuCkANXusUPoSd1GR2IiA9cNVjDwhQA"; // API key for Amadeus

const getFlightOffersSearch = () => {
  const locationCode = originLocationCode.ariaValueMax.trim(); // Get User selected name and remove extra spaces 
  if(!locationCode) return; // Reture if locationCode is empty

  const AMADEUS_API_URL = 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${}&destinationLocationCode=${}&departureDate=2023-09-30&adults=1&nonStop=false&max=250'


}

/*
// Find the cheapest flights from SYD to BKK
amadeus.shopping.flightOffersSearch.post(JSON.stringify({
  "currencyCode": "USD",
  "originDestinations": [{
    "id": "1",
    "originLocationCode": "SYD",
    "destinationLocationCode": "BKK",
    "departureDateTimeRange": {
      "date": "2023-09-21",
      "time": "10:00:00"
    }
  },
  {
    "id": "2",
    "originLocationCode": "BKK",
    "destinationLocationCode": "SYD",
    "departureDateTimeRange": {
      "date": "2023-09-30",
      "time": "17:00:00"
    }
  }
  ],
  "travelers": [{
    "id": "1",
    "travelerType": "ADULT",
    "fareOptions": [
      "STANDARD"
    ]
  },
  {
    "id": "2",
    "travelerType": "CHILD",
    "fareOptions": [
      "STANDARD"
    ]
  }
  ],
  "sources": [
    "GDS"
  ],
  "searchCriteria": {
    "maxFlightOffers": 50,
    "flightFilters": {
      "cabinRestrictions": [{
        "cabin": "BUSINESS",
        "coverage": "MOST_SEGMENTS",
        "originDestinationIds": [
          "1"
        ]
      }],
      "carrierRestrictions": {
        "excludedCarrierCodes": [
          "AA",
          "TP",
          "AZ"
        ]
      }
    }
  }
})).then(function (response) {
  console.log(response);
}).catch(function (response) {
  console.error(response);
});



function dynamicDropDown(listIndex) {

    document.getElementById("infants").length = 0;
    document.getElementById("children").length = 0;
  
    for (let i = 0; i < Number(listIndex) + 1; i++) {
      document.getElementById("infants").options[i] = new Option(i.toString(), i);
    }
  
    for (let i = 0; i < 9 - Number(listIndex) + 1; i++) {
      document.getElementById("children").options[i] = new Option(i.toString(), i);
    }
  }
  */