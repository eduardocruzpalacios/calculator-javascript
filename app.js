const inputEl = document.getElementById('input');
const totalEl = document.getElementById('total');

const operatorsEls = document.getElementsByClassName('operator');
const numbersEls = document.getElementsByClassName('number');

let inputValue = '';
let countBeforeOperating = 0;
let total = 0;
let started = false;
let finished = false;
let operator;
let operatorsSymbols = ['/', '*', '-', '+', '='];

PrintTotal();

// get user number input
for (let i = 0; i < numbersEls.length; i++) {
    numbersEls[i].addEventListener('click', function () {
        if (finished) {
            Initiate();
            finished = false;
        }
        if (inputEl.inputValue === '' && total === 0) {
            inputValue = numbersEls[i].value;
        } else {
            inputValue += numbersEls[i].value;
        }
        inputEl.value = inputValue;
        countBeforeOperating = Number(inputValue);
    }, false);
}

// operate
for (let i = 0; i < operatorsEls.length; i++) {
    operatorsEls[i].addEventListener('click', function () {
        if (countBeforeOperating === 0 && !finished) {
            // OPERATOR CLICKED BEFORE ANY NUMBER
            alert('Click a number before calculating');
            return;
        } else if (!started) {
            // CLIC OPERATOR 1ST TIME
            total = countBeforeOperating;
            started = true;
        } else {
            // CLICKS OPERATOR 2NDO AND BEYOND TIME
            switch (operator) {
                case '+':
                    total += countBeforeOperating;
                    break;
                case '-':
                    total -= countBeforeOperating;
                    break;
                case '*':
                    total *= countBeforeOperating;
                    break;
                case '/':
                    total /= countBeforeOperating;
                    break;
            }
        }

        countBeforeOperating = 0;
        PrintTotal();
        inputEl.value = '';
        operator = operatorsEls[i].value;
        inputValue = '';

        if (operator === '=') {
            inputEl.value = total;
            finished = true;
        } else {
            finished = false;
        }

    }, false);
}

function Initiate() {
    value = '';
    inputEl.innerHTML = '';

    total = 0;
    PrintTotal();

    operator = '';
    started = false;
}

function PrintTotal() {
    totalEl.innerHTML = 'Total: ' + total;
}