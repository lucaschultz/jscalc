import { appendToHistory, calculate, regularButtons } from './modules/key-info.js';

let input = document.getElementById("calculator-input");
let enterButtons = ["=", "Enter", "NumpadEnter"];
document.body.addEventListener('keydown', function(event) {

  // Use the Backspace key to remove input from display
  if (event.code === "Backspace") {
    let str = input.innerHTML;
    input.innerHTML = str.slice(-1) === " " ? str.slice(0, -3) : str.slice(0, -1);
    return
  }

  if (enterButtons.includes(event.key)) {
    let button = document.getElementById("equality");
    button.classList.add("pressed");
    button.classList.remove("released");    
    let history = document.getElementById("history-wrapper");
    appendToHistory(calculate(input.innerHTML), history);
    input.innerHTML = "";
  }

  // console.log(event.key);
  for (let [buttonID, buttonInfo] of Object.entries(regularButtons)) {
    if (buttonInfo["keys"].includes(event.key)) {
      let button = document.getElementById(buttonID);
      button.classList.add("pressed");
      button.classList.remove("released");
      input.innerHTML += buttonInfo["onPress"];
    }
  }

});

document.body.addEventListener('keyup', function(event) {

  if (enterButtons.includes(event.key)) {
    let button = document.getElementById("equality");
    button.classList.add("released");
    button.classList.remove("pressed");
  }

  for (let [buttonID, buttonInfo] of Object.entries(regularButtons)) {
    // console.log(buttonID);
    if (buttonInfo["keys"].includes(event.key)) {
      let button = document.getElementById(buttonID);
      button.classList.add("released");
      button.classList.remove("pressed");
    }
  }
});

// Class adding/removing of the body for hover animation
let calculator = document.getElementById("calculator");
calculator.addEventListener('mouseover', function() {
    calculator.classList.add("hovered");
    calculator.classList.remove("unhovered");
});
calculator.addEventListener('mouseout', function() {
    calculator.classList.add("unhovered");
    calculator.classList.remove("hovered");
});


// This part is for animating the press of a button using the mouse
// and adding the respective string to the input.

// First get an array of all the buttons (except the equality button)
let calculatorButtons = document.getElementsByClassName("calculator-button");

// Add two event listener to each of the buttons
for (let button of calculatorButtons) {

    // One eventlistener for mouse down ...
    button.addEventListener('mousedown', function() {
        // ... which changes the classes of the button element
        // for the CSS animation ...
        button.classList.add("pressed");
        button.classList.remove("released");

        // ... then checks if the button is indeed known ...
        if (regularButtons.hasOwnProperty(button.id)) {
          // ... and if that is the case gets the relevant info ...
          let buttonInfo = regularButtons[button.id];
          // ... and adds the repective string to input.
          input.innerHTML += buttonInfo["onPress"];
        } else if (button.id === "equality") {
          let history = document.getElementById("history-wrapper");
          appendToHistory(calculate(input.innerHTML), history);
          input.innerHTML = "";
        }
    });

    // This part is analougous to the above, exepts it's for the 
    // "release" animation and subsequently listens to "mouseup"
    // events. Since the strings are added on "mousedown", this also
    // adds nothing to the input.
    button.addEventListener('mouseup', function() {
        button.classList.add("released");
        button.classList.remove("pressed");
    });
}





