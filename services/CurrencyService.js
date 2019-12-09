"use strict";



function CurrencyService() {

  this.baseUrl = "https://api.exchangerate-api.com/v4/latest/";
}

CurrencyService.prototype.getCurrency = async function(currency) {
  var response = await fetch(`${this.baseUrl}${currency}`);
  var data = await response.json();

  return data;
};

var currencyServiceInstance = new CurrencyService();


