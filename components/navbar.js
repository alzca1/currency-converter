"use strict";

function Navbar(parentElement, links) {
  this.parentElement = parentElement;
  this.links = links;
}

Navbar.prototype.build = function() {
  this.elements = `
    
    <nav>
        <ul>
`;

  this.links.forEach(link => {
    this.elements += `
        <li>
            <a href="#0" url=${link.url}>${link.name}</a>
        </li>
    `;
  });

  this.elements += `
        </ul>
    </nav>
`;

  this.inject();
};

Navbar.prototype.inject = function() {
  this.parentElement.innerHTML = this.elements;
};



