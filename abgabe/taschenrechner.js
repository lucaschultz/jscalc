import calc from './math-library.js';

// Lösung zu Web- und XML-Technologien - Aufgabe 10 von:
//   Luca Schultz - s6lcschu
//   Max Sauerzapf - s6mnsaue


let input = document.getElementById("calculator-input");
let enterButtons = ["=", "Enter", "NumpadEnter"];

// This part is for animations and funcionality when using THE KEYBOARD as input

// Listen to keydown events for animations and funtionality
document.body.addEventListener('keydown', function(event) {

  // Use the Backspace key to remove input from display
  if (event.code === "Backspace") {
    let str = input.innerHTML;
    input.innerHTML = str.slice(-1) === " " ? str.slice(0, -3) : str.slice(0, -1);
    return
  }

  // When enter is pressed, calculate result and append to history
  if (enterButtons.includes(event.key)) {
    let button = document.getElementById("equality");
    button.classList.add("pressed");
    button.classList.remove("released");    
    let history = document.getElementById("history-wrapper");
    appendToHistory(calculate(input.innerHTML), history, input);
    history.scrollTo(0, history.scrollHeight-history.clientHeight);
    input.innerHTML = "";
  }

  // For all other buttons, use event key to append respective symbols to input
  for (let [buttonID, buttonInfo] of Object.entries(regularButtons)) {
    if (buttonInfo["keys"].includes(event.key)) {
      let button = document.getElementById(buttonID);
      button.classList.add("pressed");
      button.classList.remove("released");
      input.innerHTML += buttonInfo["onPress"];
    }
  }

});

// Listen to keyup events for animations
document.body.addEventListener('keyup', function(event) {

  // Release enter key
  if (enterButtons.includes(event.key)) {
    let button = document.getElementById("equality");
    button.classList.add("released");
    button.classList.remove("pressed");
  }

  // Release all other buttons
  for (let [buttonID, buttonInfo] of Object.entries(regularButtons)) {
    if (buttonInfo["keys"].includes(event.key)) {
      let button = document.getElementById(buttonID);
      button.classList.add("released");
      button.classList.remove("pressed");
    }
  }
});

// Listen to mouseover events on the body for hover animation.
// THIS COULD BE DONE IN PURE CSS using the :hover pseudo class,
// but the original version of this included a darkmode (triggered by 
// a media query) and we avoided CSS transition to avoid weird behaviour
// when changing to darkmode. Since there is no :unhover (-ish) pseodo class,
// CSS keyframe animations can't be triggered on the end of a mouseover.
// Hence the use of the JS event listeners. 
let calculator = document.getElementById("calculator");
calculator.addEventListener('mouseover', function() {
    calculator.classList.add("hovered");
    calculator.classList.remove("unhovered");
});
calculator.addEventListener('mouseout', function() {
    calculator.classList.add("unhovered");
    calculator.classList.remove("hovered");
});


// This part is for animating the press of a button using THE MOUSE as input


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
          appendToHistory(calculate(input.innerHTML), history, input);
          history.scrollTo(0, history.scrollHeight-history.clientHeight);
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

// This is used by the event listeners
const regularButtons = {
    "sqrt": {
        "keys": ["Q", "q"],
        "onPress": "√("
    },
    "power": {
        "keys": ["Dead"],
        "onPress": "^("
    },
    "openParen": {
        "keys": ["("],
        "onPress": "("
    },
    "closeParen": {
        "keys": [")"],
        "onPress": ")"
    },
    "division": {
        "keys": ["/"],
        "onPress": " / "
    },
    "nine": {
        "keys": ["9"],
        "onPress": "9"
    },
    "eight": {
        "keys": ["8"],
        "onPress": "8"
    },
    "seven": {
        "keys": ["7"],
        "onPress": "7"
    },
    "multiplication": {
        "keys": ["*"],
        "onPress": " * "
    },
    "six": {
        "keys": ["6"],
        "onPress": "6"
    },
    "five": {
        "keys": ["5"],
        "onPress": "5"
    },
    "four": {
        "keys": ["4"],
        "onPress": "4"
    },
    "subtraction": {
        "keys": ["-"],
        "onPress": " - "
    },
    "three": {
        "keys": ["3"],
        "onPress": "3"
    },
    "two": {
        "keys": ["2"],
        "onPress": "2"
    },
    "one": {
        "keys": ["1"],
        "onPress": "1"
    },
    "addition": {
        "keys": ["+"],
        "onPress": " + "
    },
    "comma": {
        "keys": [".", ","],
        "onPress": "."
    },
    "zero": {
        "keys": ["0"],
        "onPress": "0"
    }
}

// For later use in substituteForCalculation function
const displayToCalculation = {
    "√": "Math.sqrt",
    "^": "**"
}

// Replace the ^ and √ symbols with valid JS
function substituteForCalculation(str, substitutions=displayToCalculation) {
  for (let [display, calc] of Object.entries(substitutions)) {
    str = str.replace(display, calc);
  }
  return str;
}

function calculate(str) {
  if (str === "") {return " = Nothing!"}
  let processed = str.replace(/[^0-9. +\-*\/()√^]/g, "");
  processed = substituteForCalculation(processed);
  let result = calc(processed);
  if (typeof result === 'string' || result instanceof String) {
    return str + " = " + result;
  } else {
    result = +result.toFixed(3);
    return str + " = " + result;  
  }
}

function appendToHistory(str, historyNode, input) {
  // Create new line and ...
  let line = document.createElement('div');
  // ... add history-line class to it and ...
  line.classList.add("history-line");
  // ... set the str from input as its content
  line.innerHTML = str;

  // Add an event listener to line ...
  line.addEventListener('click', function() {
    // ... which sets input to be the part of the line before " = " 
    input.innerHTML = line.innerHTML.split(" = ")[0];
  });

  // Finally append it to history
  historyNode.appendChild(line);
}






