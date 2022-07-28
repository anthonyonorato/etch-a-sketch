const container = document.getElementById("container");
const sizeValue = document.getElementById("size-value");
const sizeSlider = document.getElementById("size-slider");
const colorChoices = Array.from(document.querySelectorAll(".color-choice"));
const clearButton = document.getElementById("clear"):

let colorChoice = 'black';
let gridItems = Array.from(document.querySelectorAll('.grid-item'));