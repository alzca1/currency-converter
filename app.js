"use strict";

function main() {
  var entry_point = "/currency";
  var layoutInstance = null;
  var rootElement = document.querySelector("#root");
  var navbarInstance = null;
  var links = [
    { name: "Home", url: "/" },
    { name: "Converter", url: "/currency" }
  ];

  generateLayout();
  generateNavbar();
  addNavbarListeners();
  activateRouter();

  function generateLayout() {
    layoutInstance = new Layout(rootElement);
    layoutInstance.build();
  }

  function generateNavbar() {
    navbarInstance = new Navbar(layoutInstance.header, links);
    navbarInstance.build();
  }

  function activateRouter() {
    RouterInstance.buildDom(entry_point, layoutInstance.main);
  }

  function addNavbarListeners() {
    var anchors = document.querySelectorAll("nav a");
    anchors.forEach(anchor => {
      anchor.addEventListener("click", changePage);
    });
  }

  function changePage(event) {
    var url = event.target.attributes.url.value;
    RouterInstance.buildDom(url, layoutInstance.main);
  }
}

window.addEventListener("load", main);
