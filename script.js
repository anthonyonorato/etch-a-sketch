const container = document.getElementById("container");
const sizeValue = document.getElementById("size-value");
const sizeSlider = document.getElementById("size-slider");
const colorChoices = Array.from(document.querySelectorAll(".color-choice"));
const clearButton = document.getElementById("clear"):

let colorChoice = 'black';
let gridItems = Array.from(document.querySelectorAll('.grid-item'));

function makeGrid(rows, columns, color) {
  
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-colums', columns);
    
    for (i = 0; i < (rows * columns); i++) {
      let cell = document.createElement('div');
      container.appendChild(cell).className = 'grid-item';
    };
  
    gridItems = Array.from(document.querySelectorAll('.grid-item'));
  
    checkColor();
  
  };