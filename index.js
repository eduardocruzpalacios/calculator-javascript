import { Calculator } from './calculator/calculator.js';

let calculator = new Calculator();

const inputEl = document.getElementById('input');
const totalEl = document.getElementById('total');

const operatorsEls = document.getElementsByClassName('operator');
const numbersEls = document.getElementsByClassName('number');

const computeEl = document.getElementById('=');

const printComputation = () => {
  totalEl.innerHTML = 'Total: ' + calculator.getComputation();
};

const cleanResult = () => {
  totalEl.innerHTML = 'Total: ' + calculator.getCurrentOperand();
};

const assignFunctionalityToNumberButtons = () => {
  for (let i = 0; i < numbersEls.length; i++) {
    numbersEls[i].addEventListener(
      'click',
      () => {
        calculator.assignOperand(numbersEls[i].value);
        if(calculator.getComputation !== 0) {
          cleanResult();
        }
      },
      false
    );
  }
};

const assignFunctionalityToInput = () => {
  inputEl.addEventListener(
    'input',
    () => {
      calculator.assignOperand(inputEl.value);
      if (calculator.getComputation !== 0) {
        cleanResult();
      }
    },
    false
  );
};

const assignFunctionalityToOperatorButtons = () => {
  for (let i = 0; i < operatorsEls.length; i++) {
    operatorsEls[i].addEventListener(
      'click',
      () => {
        calculator.setOperator(operatorsEls[i].value);
        printComputation();
      },
      false
    );
  }
};

const assignFunctionalityToComputeButton = () => {
  computeEl.addEventListener(
    'click',
    () => {
      calculator.compute();
      printComputation();
    },
    false
  );
};

printComputation();
assignFunctionalityToNumberButtons();
assignFunctionalityToInput();
assignFunctionalityToOperatorButtons();
assignFunctionalityToComputeButton();
