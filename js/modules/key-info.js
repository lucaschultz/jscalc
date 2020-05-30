let regularButtons = {
    "sqrt": {
        "keys": ["Q", "q"],
        "onPress": "√(",
        "substitute": {
            "html": "√",
            "calc": "Math.sqrt"
        }
    },
    "power": {
        "keys": ["Dead"],
        "onPress": "^(",
        "substitute": {
            "html": "^",
            "calc": "Math.pow"
        }
    },
    "openParen": {
        "keys": ["("],
        "onPress": "(",
        "substitute": {
            "html": "(",
            "calc": "("
        }
    },
    "closeParen": {
        "keys": [")"],
        "onPress": ")",
        "substitute": {
            "html": ")",
            "calc": ")"
        }
    },
    "division": {
        "keys": ["/"],
        "onPress": "/",
        "substitute": {
            "html": " / ",
            "calc": " / "
        }
    },
    "nine": {
        "keys": ["9"],
        "onPress": "9",
        "substitute": {
            "html": "9",
            "calc": "9"
        }
    },
    "eight": {
        "keys": ["8"],
        "onPress": "8",
        "substitute": {
            "html": "8",
            "calc": "8"
        }
    },
    "seven": {
        "keys": ["7"],
        "onPress": "7",
        "substitute": {
            "html": "7",
            "calc": "7"
        }
    },
    "multiplication": {
        "keys": ["*"],
        "onPress": " * ",
        "substitute": {
            "html": " * ",
            "calc": " * "
        }
    },
    "six": {
        "keys": ["6"],
        "onPress": "6",
        "substitute": {
            "html": "6",
            "calc": "6"
        }
    },
    "five": {
        "keys": ["5"],
        "onPress": "5",
        "substitute": {
            "html": "5",
            "calc": "5"
        }
    },
    "four": {
        "keys": ["4"],
        "onPress": "4",
        "substitute": {
            "html": "4",
            "calc": "4"
        }
    },
    "subtraction": {
        "keys": ["-"],
        "onPress": " - ",
        "substitute": {
            "html": " - ",
            "calc": " - "
        }
    },
    "three": {
        "keys": ["3"],
        "onPress": "3",
        "substitute": {
            "html": "3",
            "calc": "3"
        }
    },
    "two": {
        "keys": ["2"],
        "onPress": "2",
        "substitute": {
            "html": "2",
            "calc": "2"
        }
    },
    "one": {
        "keys": ["1"],
        "onPress": "1",
        "substitute": {
            "html": "1",
            "calc": "1"
        }
    },
    "addition": {
        "keys": ["+"],
        "onPress": " + ",
        "substitute": {
            "html": " + ",
            "calc": " + "
        }
    },
    "comma": {
        "keys": [".", ","],
        "onPress": ".",
        "substitute": {
            "html": ".",
            "calc": "."
        }
    },
    "zero": {
        "keys": ["0"],
        "onPress": "0",
        "substitute": {
            "html": "0",
            "calc": "0"
        }
    }
}

let equalityButton = {
    "id": "comma",
    "keys": [".", ","],
    "onPress": ".",
    "substitute": {
        "html": ".",
        "calc": "."
    }
}

export { equalityButton, regularButtons };