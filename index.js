import { calculatorLogic } from './calculatorLogic/calculatorLogic.js';

const inputEl = document.getElementById('input');

const operatorsEls = document.querySelectorAll('.operator');
const numbersEls = document.querySelectorAll('.number');

const computeEl = document.getElementById('=');

const printValue = value => {
  inputEl.value = value;
};

const assignFunctionalityToButtons = (elements, callback) => {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', callback, false);
  }
};

assignFunctionalityToButtons(numbersEls, () => {
  calculatorLogic.assignOperand(event.target.value);
  printValue(calculatorLogic.getCurrentOperand());
});

assignFunctionalityToButtons(operatorsEls, () => {
  calculatorLogic.setOperator(event.target.value);
  printValue(calculatorLogic.getComputation());
});

computeEl.addEventListener('click', () => {
  try {
    calculatorLogic.compute();
    printValue(calculatorLogic.getComputation());
  } catch (error) {
    printValue(error.message);
  }
});
