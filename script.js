"use strict";

// DOM elements
const container = document.querySelector(".container");

for(let i = 1; i < 257; i++) {
  let div = document.createElement("div");
  div.textContent = `div #${i}`;
  div.className = "box";
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = `black`;
  });
  container.appendChild(div);
}