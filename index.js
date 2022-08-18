import { Calculator } from './calculator/calculator.js';

let calculator = new Calculator();

const inputEl = document.getElementById('input');

const operatorsEls = document.getElementsByClassName('operator');
const numbersEls = document.getElementsByClassName('number');

const computeEl = document.getElementById('=');

const printOperand = () => {
  inputEl.value = calculator.getCurrentOperand();
};

const printComputation = () => {
  inputEl.value = calculator.getComputation();
};

const assignFunctionalityToNumberButtons = () => {
  for (let i = 0; i < numbersEls.length; i++) {
    numbersEls[i].addEventListener(
      'click',
      () => {
        calculator.assignOperand(numbersEls[i].value);
        printOperand();
      },
      false
    );
  }
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

assignFunctionalityToNumberButtons();
assignFunctionalityToOperatorButtons();
assignFunctionalityToComputeButton();
