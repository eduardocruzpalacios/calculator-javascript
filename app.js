// VARIABLES

const userInput = document.getElementById('input');
const userResult = document.getElementById('result');

const operators = document.getElementsByClassName('operator');

var result = 0;
var value;
var started = false;
var operator;
var operatorsSymbols = ['/', '*', '-', '+'];

console.log('operators: ' + operators);

for (let i = 0; i < operators.length; i++) {

    operators[i].addEventListener('click', function () {

        value = Number(userInput.value);

        if (value == "") {
            // CLIC AND INPUT NOT FOUND
            alert('Write some number before calculating');
        } else if (!started) {
            // CLIC OPERATOR 1ST TIME -> INPUT GOES TO RESULT, SAVE OPERATOR, CHANGE SWITCH
            result = value;
            started = true;
        } else {
            // CLICS OPERATOR 2NDO AND BEYOND TIME -> OPERATE, SAVE OPERATOR
            switch (operator) {
                case '+':
                    result += value;
                    break;
                case '-':
                    result -= value;
                    break;
                case '*':
                    result *= value;
                    break;
                case '/':
                    result /= value;
                    break;
            }
        }

        operator = operators[i].value;
        userInput.value = '';

        console.log('result: ' + result);
        console.log('operator: ' + operator);

    }, false);

}

// USER CLICS = --> DEPENDING ON OPERATOR, THE APP DO THE OPERATION WITH RESULT AND INPUT; THEN, RETURN RESULT