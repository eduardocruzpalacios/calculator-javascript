import { Calculator } from './calculator/calculator.js';

let calculator = new Calculator();

const inputEl = document.getElementById('input');
const totalEl = document.getElementById('total');

const operatorsEls = document.getElementsByClassName('operator');
const numbersEls = document.getElementsByClassName('number');

const computeEl = document.getElementById('=');

const printOperandOnInput = () => {
  inputEl.value = calculator.getCurrentOperand();
};

const printComputationOnResultBox = () => {
  totalEl.innerHTML = 'Total: ' + calculator.getComputation();
};

const printComputationOnInput = () => {
  inputEl.value = calculator.getComputation();
};

const assignFunctionalityToNumberButtons = () => {
  for (let i = 0; i < numbersEls.length; i++) {
    numbersEls[i].addEventListener(
      'click',
      () => {
        calculator.assignOperand(numbersEls[i].value);
        printOperandOnInput();
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
        printComputationOnResultBox();
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
      printComputationOnInput();
      printComputationOnResultBox();
    },
    false
  );
};

printComputationOnResultBox();
assignFunctionalityToNumberButtons();
assignFunctionalityToOperatorButtons();
assignFunctionalityToComputeButton();
