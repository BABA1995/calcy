import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.scss'],
})
@ViewChild('keys')
export class CalciComponent implements OnInit {
  displayValue = 0;
  changeValue: number;
  value: number;
  operand1: any;
  operand2: any;
  operator: any;
  temp = 0;
  constructor() {}

  ngOnInit(): void {}

  onNumber(val: number) {
    if (this.displayValue === 0) {
      this.value = val;
      this.displayValue = this.value;
      this.changeValue = this.displayValue;
      this.operand1 = +val;
      console.log(this.operand1);
    } else if (this.displayValue > 0) {
      this.displayValue = this.changeValue + val;
      this.changeValue = this.displayValue;
      this.operand1 = this.operand1 + val;
      console.log(this.operand1);
    } else {
      this.displayValue = this.changeValue + val;
      this.changeValue = this.displayValue;
      let i = 1;
      this.operand2 = 0;
      while (i > 0) {
        this.temp += val;
        this.operand2 += this.temp;
        console.log(this.operand2);
        i--;
      }
    }
  }
  onEquation(exp: any) {
    if (this.displayValue !== 0) {
      debugger;
      this.operator = exp;
      this.displayValue = this.changeValue + exp;
      this.changeValue = this.displayValue;
    }
  }
  onAllClear() {
    this.displayValue = 0;
    this.changeValue = 0;
    this.value = 0;
    this.operand1 = 0;
    this.operand2 = 0;
    this.temp = 0;
  }
  onOperation() {
    let number1 = +this.operand1;
    let number2 = +this.operand2;
    switch (this.operator) {
      case '+':
        debugger;
        this.displayValue = number1 + number2;
        this.operand1 = this.displayValue;
        break;
      case '-':
        this.displayValue = number1 - number2;
        this.operand1 = this.displayValue;
        break;
        case '*':
        this.displayValue = number1 * number2;
        this.operand1 = this.displayValue;
        break;
        case '/':
        this.displayValue = number1 / number2;
        this.operand1 = this.displayValue;
        break;
    }
  }
}
