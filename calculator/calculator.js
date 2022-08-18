export class Calculator {
  constructor() {
    this.operand = '';
    this.operator = null;
    this.computation = 0;
  }

  assignOperand(operand) {
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
    switch (this.operator) {
      case '+':
        this.computation += Number(this.operand);
        break;
      case '-':
        this.computation -= Number(this.operand);
        break;
      case '*':
        this.computation *= Number(this.operand);
        break;
      case '/':
        this.computation /= Number(this.operand);
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
