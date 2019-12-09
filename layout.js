'use strict'


function Layout(root) {
    this.root = root; 
    this.elements = null; 
    this.main = null;
    this.header = null; 
    this.footer = null; 
}

Layout.prototype.build = function (){
    this.elements = `
    <header id="site-header"> </header>
    <main id="site-main"> </main>
    <footer id="site-footer"> <footer>
    `

    this.inject(); 
    this.getContainers();
}

Layout.prototype.inject = function() {
    this.root.innerHTML = this.elements;
   
}

Layout.prototype.getContainers = function () {
    this.header = document.querySelector('#site-header')
    this.main = document.querySelector('#site-main')
    this.footer = document.querySelector('#site-footer')
}