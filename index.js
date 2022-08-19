import { CalculatorLogic } from './calculatorLogic/calculatorLogic.js';

let calculatorLogic = new CalculatorLogic();

const inputEl = document.getElementById('input');

const operatorsEls = document.getElementsByClassName('operator');
const numbersEls = document.getElementsByClassName('number');

const computeEl = document.getElementById('=');

const printOperand = () => {
  inputEl.value = calculatorLogic.getCurrentOperand();
};

const printComputation = () => {
  inputEl.value = calculatorLogic.getComputation();
};

const assignFunctionalityToNumberButtons = () => {
  for (let i = 0; i < numbersEls.length; i++) {
    numbersEls[i].addEventListener(
      'click',
      () => {
        calculatorLogic.assignOperand(numbersEls[i].value);
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
        calculatorLogic.setOperator(operatorsEls[i].value);
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
      calculatorLogic.compute();
      printComputation();
    },
    false
  );
};

assignFunctionalityToNumberButtons();
assignFunctionalityToOperatorButtons();
assignFunctionalityToComputeButton();
