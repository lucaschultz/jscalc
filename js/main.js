import { equalityButton, regularButtons } from './modules/key-info.js';

let input = document.getElementById("calculator-input");
document.body.addEventListener('keydown', function(event) {
  for (let [buttonID, buttonInfo] of Object.entries(regularButtons)) {
    if (buttonInfo["keys"].includes(event.key)) {
      let button = document.getElementById(buttonID);
      button.classList.add("pressed");
      button.classList.remove("released");
      input.innerHTML += buttonInfo["onPress"];
    };
  };
});


document.body.addEventListener('keyup', function(event) {
  for (let [buttonID, buttonInfo] of Object.entries(regularButtons)) {
    // console.log(buttonID);
    if (buttonInfo["keys"].includes(event.key)) {
      let button = document.getElementById(buttonID);
      button.classList.add("released");
      button.classList.remove("pressed");
    };
  };
});




// document.body.addEventListener('keyup', function(event) {
//   // console.log(event.key);
//   // console.log(event.code);
//   if (event.code === "NumpadEnter") {
//     eq.classList.add("released");
//     eq.classList.remove("pressed");
//   }
// });




// // Key down functionality for equality
// var eq = document.getElementById("equality");
// document.body.addEventListener('keydown', function(event) {
//   // console.log(event.key);
//   if (event.code === "NumpadEnter") {
//     eq.classList.add("pressed");
//     eq.classList.remove("released");
//   }
// });
// document.body.addEventListener('keyup', function(event) {
//   // console.log(event.key);
//   // console.log(event.code);
//   if (event.code === "NumpadEnter") {
//     eq.classList.add("released");
//     eq.classList.remove("pressed");
//   }
// });


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


// This part is for animating the press of a button using the mouse
// and adding the respective string to the input.

// First get an array of all the buttons (except the equality button)
let calculatorButtons = document.getElementsByClassName("calculator-button");

// Add two event listener to each of the buttons
for (let button of calculatorButtons) {

    // One eventlistener for mouse down ...
    button.addEventListener('mousedown', function(event) {
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
        };
    });

    // This part is analougous to the above, exepts it's for the 
    // "release" animation and subsequently listens to "mouseup"
    // events. Since the strings are added on "mousedown", this also
    // adds nothing to the input.
    button.addEventListener('mouseup', function(event) {
        button.classList.add("released");
        button.classList.remove("pressed");
    });
}


