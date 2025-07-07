"use strict";

// DOM elements
const container = document.querySelector(".container");

for(let i = 1; i < 17; i++) {
  let div = document.createElement("div")
  div.textContent = `div #${i}`;
  div.className = "box"
  container.appendChild(div);
}