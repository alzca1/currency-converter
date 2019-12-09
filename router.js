"use strict";

function Router() {
  this.page = null;
}

Router.prototype.buildDom = function(url, parentElement) {
  switch (url) {
    case "/":
      this.generateLandingPage(parentElement);
      break;

    case "/currency":
      this.generateCurrencyPage(parentElement);
      break;
    default:
      this.generateLandingPage(parentElement);
      break;
  }
};

Router.prototype.generateLandingPage = function (parentElement){
    this.page = new LandingPage(parentElement);
    this.page.build(); 
}
Router.prototype.generateCurrencyPage = function (parentElement){
    this.page = new CurrencyPage(parentElement);
    this.page.build(); 
}

var RouterInstance = new Router(); 

