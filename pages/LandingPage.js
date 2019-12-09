'use strict'



function LandingPage (parentElement) {
    this.parentElement = parentElement;
    this.elements = null; 
}


LandingPage.prototype.build = function () {
    this.elements = `
    
    <header>
    <h1> My personal Website </h1>
    <h5> Here you will find yourself like home! </h5>
    </header>
    `;

    this.inject(); 
};

LandingPage.prototype.inject = function (parentElement){
    this.parentElement.innerHTML = this.elements; 
    console.log('landing page injected!')
}


