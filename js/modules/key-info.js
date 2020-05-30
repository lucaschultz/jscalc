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
    if (str === "") {return "There goes nothing!"}
  let processed = str.replace(/[^0-9. +\-*\/()√^]/g, "");
  processed = substituteForCalculation(processed);
  console.log(processed);
  let result;
  try {
    result = eval(processed);
  } catch (error) {
    return "Error";
  }
  return str + " = " + result;
}

function appendToHistory(str, historyNode) {
  let line = document.createElement('div');
  line.classList.add("history-line");
  line.innerHTML = str;
  historyNode.appendChild(line);
}

export { appendToHistory, calculate ,regularButtons };

