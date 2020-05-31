let regularButtons = {
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

let displayToCalculation = {
    "√": "Math.sqrt",
    "^": "**"
}

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
  console.log(processed);
  let result;
  try {
    result = eval(processed);
    result = result.toFixed(2)
  } catch (error) {
    return str + " = Error";
  }
  return str + " = " + result;
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

export { appendToHistory, calculate ,regularButtons };

