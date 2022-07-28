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

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function randomRGB() {
  let red = Math.floor((Math.random() * 255) + 1);
  let green = Math.floor((Math.random() * 255) + 1);
  let blue = Math.floor((Math.random() * 255) + 1);

  return `rgb(${red},${green},${blue})`;
}

function checkColor() {
    if (colorChoice === 'black') {
      gridItems.forEach((gridItem) =>
        gridItem.addEventListener('mouseover',
          e => {
            e.target.style.backgroundColor = 'black';
          }
        )
      )
    } else if (colorChoice === 'chaos') {
      gridItems.forEach((gridItem) =>
        gridItem.addEventListener('mouseover',
          e => {
            e.target.style.backgroundColor = randomRGB();
          }
        )
      )
    }
  }
  