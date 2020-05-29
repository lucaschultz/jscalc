import { equalityButton, regularButtons } from './modules/key-info.js';


document.body.addEventListener('keydown', function(event) {
  for (let [buttonID, buttonInfo] of Object.entries(regularButtons)) {
    if (buttonInfo.keys.some())
  }
  if (event.code === "NumpadEnter") {
    eq.classList.add("pressed");
    eq.classList.remove("released");
  }
});
document.body.addEventListener('keyup', function(event) {
  // console.log(event.key);
  // console.log(event.code);
  if (event.code === "NumpadEnter") {
    eq.classList.add("released");
    eq.classList.remove("pressed");
  }
});




// Key down functionality for equality
var eq = document.getElementById("equality");
document.body.addEventListener('keydown', function(event) {
  // console.log(event.key);
  if (event.code === "NumpadEnter") {
    eq.classList.add("pressed");
    eq.classList.remove("released");
  }
});
document.body.addEventListener('keyup', function(event) {
  // console.log(event.key);
  // console.log(event.code);
  if (event.code === "NumpadEnter") {
    eq.classList.add("released");
    eq.classList.remove("pressed");
  }
});


// Class adding/removing of the body for hover animation
let calculator = document.getElementById("calculator");
calculator.addEventListener('mouseover', function(event) {
    calculator.classList.add("hovered");
    calculator.classList.remove("unhovered");
});
calculator.addEventListener('mouseout', function(event) {
    calculator.classList.add("unhovered");
    calculator.classList.remove("hovered");
});


// Make all the buttons clickable
let calculatorButtons = document.getElementsByClassName("calculator-button");
for (let button of calculatorButtons) {
    button.addEventListener('mousedown', function(event) {
        button.classList.add("pressed");
        button.classList.remove("released");
    });

    button.addEventListener('mouseup', function(event) {
        button.classList.add("released");
        button.classList.remove("pressed");
    });
}


