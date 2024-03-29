"use strict";

var value = [
  {
    currencyOrigin: {
      name: "USD",
      country: "United States of America",
      coinName: "US dollar",
      flag: "images/USD_USA_DOLLAR.svg"
    }
  },
  {
    currencyDestiny: {
      name: "EUR",
      country: "European Union",
      coinName: "Euro",
      flag: "images/EUR_EUROPE_EURO.svg"
    }
  },

  { amount: 0 }
];

function CurrencyPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.currencyContainer = null;
  this.currencies = [
    {
      name: "AED",
      country: "Arab United Emirates",
      coinName: "Arab Dirham",
      flag: "images/AED_EMIRATES_DIRHAM.svg"
    },
    {
      name: "ARS",
      country: "Argentina",
      coinName: "Argentinan Peso",
      flag: "images/ARS_ARGENTINA_PESO.svg"
    },
    {
      name: "AUD",
      country: "Australia",
      coinName: "Australian Dollar",
      flag: "images/AUD_AUSTRALIA_DOLLAR.svg"
    },
    {
      name: "BGN",
      country: "Bulgaria",
      coinName: "Bulgarian Leva",
      flag: "images/BGN_BULGARIA_LEVA.svg"
    },
    {
      name: "BRL",
      country: "Brasil",
      coinName: "Real Brasilero",
      flag: "images/BRL_BRASIL_REAL.svg"
    },
    {
      name: "BSD",
      country: "Bahamas",
      coinName: "Bahamas Dollar",
      flag: "images/BSD_BAHAMAS_DOLLAR.svg"
    },
    {
      name: "CAD",
      country: "Canada",
      coinName: "Canadian Dollar",
      flag: "images/CAD_CANADA_DOLLAR.svg"
    },
    {
      name: "CHF",
      country: "Switzerland",
      coinName: "Swiss Franch",
      flag: "images/CHF_SWITZERLAND_FRANCH.svg"
    },
    {
      name: "CLP",
      country: "Chile",
      coinName: "Chilean Peso",
      flag: "images/CLP_CHILE_PESO.svg"
    },
    { name: "CNY", country: "China", coinName: "Chinese Yuan", flag: "" },
    { name: "COP", country: "", coinName: "", flag: "" },
    { name: "CZK", country: "", coinName: "", flag: "" },
    { name: "DKK", country: "", coinName: "", flag: "" },
    { name: "DOP", country: "", coinName: "", flag: "" },
    { name: "EGP", country: "", coinName: "", flag: "" },
    {
      name: "EUR",
      country: "European Union",
      coinName: "Euro",
      flag: "images/EUR_EUROPE_EURO.svg"
    },
    { name: "FJD", country: "", coinName: "", flag: "" },
    {
      name: "GBP",
      country: "United Kingdom",
      coinName: "British Pound",
      flag: "images/GBP_UK_POUND.svg"
    },
    { name: "GTQ", country: "", coinName: "", flag: "" },
    { name: "HKD", country: "", coinName: "", flag: "" },
    { name: "HRK", country: "", coinName: "", flag: "" },
    { name: "HUF", country: "", coinName: "", flag: "" },
    { name: "IDR", country: "", coinName: "", flag: "" },
    { name: "ILS", country: "", coinName: "", flag: "" },
    { name: "INR", country: "", coinName: "", flag: "" },
    { name: "ISK", country: "", coinName: "", flag: "" },
    {
      name: "JPY",
      country: "Japan",
      coinName: "japanese yean",
      flag: "images/JPY_JAPAN_YEN.svg"
    },
    { name: "KRW", country: "", coinName: "", flag: "" },
    { name: "KZT", country: "", coinName: "", flag: "" },
    { name: "MXN", country: "", coinName: "", flag: "" },
    { name: "MYR", country: "", coinName: "", flag: "" },
    { name: "NOK", country: "", coinName: "", flag: "" },
    { name: "NZD", country: "", coinName: "", flag: "" },
    { name: "PAB", country: "", coinName: "", flag: "" },
    { name: "PEN", country: "", coinName: "", flag: "" },
    { name: "PHP", country: "", coinName: "", flag: "" },
    { name: "PKR", country: "", coinName: "", flag: "" },
    { name: "PLN", country: "", coinName: "", flag: "" },
    { name: "PYG", country: "", coinName: "", flag: "" },
    { name: "RON", country: "", coinName: "", flag: "" },
    { name: "RUB", country: "", coinName: "", flag: "" },
    { name: "SAR", country: "", coinName: "", flag: "" },
    { name: "SEK", country: "", coinName: "", flag: "" },
    { name: "SGD", country: "", coinName: "", flag: "" },
    { name: "THB", country: "", coinName: "", flag: "" },
    { name: "TRY", country: "", coinName: "", flag: "" },
    { name: "TWD", country: "", coinName: "", flag: "" },
    { name: "UAH", country: "", coinName: "", flag: "" },
    {
      name: "USD",
      country: "United States of America",
      coinName: "US dollar",
      flag: "images/USD_USA_DOLLAR.svg"
    },
    { name: "UYU", country: "", coinName: "", flag: "" },
    { name: "VND", country: "", coinName: "", flag: "" },
    { name: "ZAR", country: "", coinName: "", flag: "" }
  ];
}

CurrencyPage.prototype.build = function() {
  this.elements = `
    
    <header>
    <div class="container text-center">
    <h1> Currency Converter </h1>
    <h5> Get your current currency conversion! </h5>
    </div>
    </header>

    <main>
    <form class="container p-3 w-50">
    
    <input class="form-control form-control-lg w-100" type="number" name="amount" id="currencyAmount">
    
   
    <select class="mt-2 w-100"  id="currencyOrigin">`;

  this.currencies.forEach(currency => {
    this.elements += `
      <option class="form-control" value=${currency.name}> ${currency.coinName} (${currency.name})</option>
      `;
  });

  this.elements += `
   </select>
   <select class=" mt-3 w-100" id="currencyDestiny">`;
  this.currencies.forEach(currency => {
    this.elements += `
    <option class="form-control " value=${currency.name}> ${currency.coinName} (${currency.name})</option>
    `;
  });

  this.elements += `
  </select>
  <div class="m-3 text-center">
   <button class="btn btn-primary btn-lg mt-2 mx-auto" type="button" id="getValue">Get Value </button>
   </div>
   </form>

  <div class="currencyContainer container"></div>
    `;

  this.inject();
  this.addListeners();
};

CurrencyPage.prototype.inject = function(parentElement) {
  this.parentElement.innerHTML = this.elements;
};

CurrencyPage.prototype.addListeners = function(parentElement) {
  var number = document.querySelector("#currencyAmount");
  var selectOrigin = document.querySelector("#currencyOrigin");
  var selectDestiny = document.querySelector("#currencyDestiny");
  var button = document.querySelector("#getValue");

  number.addEventListener("change", this.getInputValue);
  selectOrigin.addEventListener("change", this.getInputValue);
  selectDestiny.addEventListener("change", this.getInputValue);
  button.addEventListener("click", this.connectToApi);
};

CurrencyPage.prototype.getInputValue = function(event) {
  var page = new CurrencyPage();
  var result = event.target.value;
  var array = page.currencies;
  var index = findIndex(result);

  function findIndex(value) {
    return array.findIndex(element => element.name === value);
  }

  if (event.target.id === "currencyAmount") {
    value[2].amount = result;
  } else if (event.target.id === "currencyOrigin") {
    value[0].currencyOrigin = array[index];
  } else if (event.target.id === "currencyDestiny") {
    value[1].currencyDestiny = array[index];
  }
  console.log(value);
};

CurrencyPage.prototype.connectToApi = async function(parentElement) {
  var connectionOrigin = await currencyServiceInstance.getCurrency(
    value[0].currencyOrigin.name
  );
  var date = new Date(connectionOrigin.time_last_updated * 1000);
  var localDate = date.toLocaleString({ hour12: false });
  var coins = connectionOrigin.rates;
  var container = document.querySelector(".currencyContainer");

  this.currencyContainer = `
  <article class="text-center">
  <span> <h5>Info last updated: ${localDate} </h5> </span>
  <div class="card-group w-75 p-5 mx-auto">
  <div class="card"> 
  <img class="img fluid card-img-top w-50 mx-auto" src="${value[0].currencyOrigin.flag}">
  <div class="card-body text-center">
  <h5 class="text-primary">  ORIGIN </h5> <br> <h4>${value[2].amount} ${value[0].currencyOrigin.name} </h4> <h5>${value[0].currencyOrigin.coinName}</h5>
  </div>
  
  </div>
  <div class="card"> 
  <img class="img-fluid card-img-top w-50 mx-auto" src="${value[1].currencyDestiny.flag}">
  <div class="card-body text-center">`;

  for (var x in coins) {
    if (
      x !== value[0].currencyOrigin.name &&
      x === value[1].currencyDestiny.name
    ) {
      this.currencyContainer += `

  <h5 class="text-success">  DESTINY </h5> <br> <h4> ${coins[x].toFixed(3) *
    value[2].amount} ${x} </h4> <h5>${value[1].currencyDestiny.coinName}</h5>
  </div>
  </div>
  </div>

  `;
    }
  }
  this.currencyContainer += "</article>";

  container.innerHTML = this.currencyContainer;
  console.log(connectionOrigin);
};
