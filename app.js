// VARIABLES

const userInput = document.getElementById('input');
const userResult = document.getElementById('result');

const operators = document.getElementsByClassName('operator');
const numbers = document.getElementsByClassName('number');

console.log('operators: ' + operators);
console.log('numbers: ' + numbers);

var result = 0;
var value;
var started = false;
var finished = false;
var operator;
var operatorsSymbols = ['/', '*', '-', '+', '='];

// NUMBERS 0 1 2 3 4 5 6 7 8 9 ,

for (let i = 0; i < numbers.length; i++) {

    numbers[i].addEventListener('click', function () {

        if (finished) {
            value = numbers[i].value;
            console.log('finished. Value: ' + value);
            userResult.innerHTML = "Total: " + result;
            started = false;
        } else if (userInput.value == "" && result == 0) {
            // FIRST VALUE ENTERED
            value = numbers[i].value;
            console.log('FIRST VALUE ENTERED');
        } else {
            // 2ND VALUE AND BEYOND ENTERED
            value += numbers[i].value;
        }
        console.log('Number clic. Value: ' + value);
        userInput.value = value;
        finished = false;

    }, false);

}

// OPERATORS + - * / =

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
            userInput.value = '';
            userResult.innerHTML = "Total: " + result;
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
            userResult.innerHTML = "Total: " + result;
        }

        operator = operators[i].value;
        value = "";

        console.log('Operator: ' + operator);

        if (operator == '=') {
            userInput.value = result;
            userResult.innerHTML = "Total: " + result;
            result = 0;
            finished = true;
            console.log('= clicked');
        }

    }, false);

}