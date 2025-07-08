"use strict";
/* 
1200
10px per 1 square
width = 12px * input(squares)
*/

// DOM elements
const container = document.querySelector(".container");
let btnAsk = document.createElement("button");
let btnReset = document.createElement("button");
let btnDiv = document.querySelector(".buttonContainer");
let grid = 32
let width = `${16*grid}px`
btnAsk.className = "button";
btnAsk.textContent = "Change Grid";
btnReset.className = "button";
btnReset.textContent = "Reset";
btnDiv.appendChild(btnAsk);
btnDiv.appendChild(btnReset);
btnAsk.addEventListener("click", () => {
  grid = prompt("What grid you wish", "64")
  if(grid > 100) {
    alert("Please enter number less than 100")
  } else{
    deleteGrid()
    gridMake(grid)
  }
})

btnReset.addEventListener("click", () => {
  deleteGrid()
  gridMake(grid)
})

function deleteGrid() {
  container.querySelectorAll(".box").forEach(el => el.remove());
}

function gridMake(value) {
  width = `${16*value}px`
  for(let i = 1; i <= value*value; i++) {
    let div = document.createElement("div");
    // div.textContent = `div #${i}`;
    div.className = "box";
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = `black`;
    });
    container.appendChild(div);
  }
  container.style.width = width
}

gridMake(grid)


