class CalculatorLogic {
  constructor() {
    this.operand = '';
    this.operator = null;
    this.computation = 0;
  }

  assignOperand(operand) {
    if (this.operand.slice(-1) === '.' && operand === '.') {
      return;
    }
    if (this.computation === 0 || operand === '') {
      this.operand = operand;
    } else {
      this.operand += operand;
    }
    if (this.operator === null) {
      this.computation = Number(this.operand);
    }
  }

  setOperator(operator) {
    if (this.operand === '' && this.computation === 0) {
      return;
    }
    if (this.operator !== null) {
      this.compute();
    } else {
      this.operand = '';
    }
    this.operator = operator;
  }

  getCurrentOperand() {
    return this.operand;
  }

  compute() {
    if (this.operand === '') {
      return;
    }
    const operand = Number(this.operand);
    if (Number.isNaN(operand)) {
      throw new Error('Invalid operand: ' + this.operand);
    }
    switch (this.operator) {
      case '+':
        this.computation += operand;
        break;
      case '-':
        this.computation -= operand;
        break;
      case '*':
        this.computation *= operand;
        break;
      case '/':
        if (operand === 0) {
          throw new Error('Cannot divide by zero');
        }
        this.computation /= operand;
        break;
      default:
        return;
    }
    this.operand = '';
    this.operator = null;
  }

  getComputation() {
    return this.computation;
  }
}

export const calculatorLogic = new CalculatorLogic();
