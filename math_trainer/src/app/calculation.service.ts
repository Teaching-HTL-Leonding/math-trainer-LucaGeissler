import { Injectable } from '@angular/core';

export interface Exercise {
  number1: number;
  operator: string;
  number2: number;
  result: number;
  input?: number;
}

@Injectable({
  providedIn: 'root',
})
export class CalculationService {
  constructor() {}
  questions: number = 10;
  digits: number = 1;
  plus: boolean = true;
  minus: boolean = true;
  multi: boolean = true;
  divide: boolean = true;

  randomNumber(): number {
    return Math.floor(Math.random() * (10 ** this.digits));
  }

  givenOperator(): string[] {
    let operators: string[] = [];
    if (this.plus) {
      operators.push('+');
    }
    if (this.minus) {
      operators.push('-');
    }
    if (this.multi) {
      operators.push('*');
    }
    if (this.divide) {
      operators.push('/');
    }
    return operators;
  }

  oneTrue(): boolean {
    return this.plus || this.minus || this.multi || this.divide;
  }

  generateExercise(): Exercise {
    let number1: number = this.randomNumber();
    let number2: number = this.randomNumber();
    let operator: string =
      this.givenOperator()[
        Math.floor(Math.random() * this.givenOperator().length)
      ];
    let result: number = 0;
    if (operator === '+') {
      result = number1 + number2;
    }
    if (operator === '-') {
      if (number1 > number2) {
        result = number1 - number2;
      } else {
        result = number2 - number1;
        const temp = number1;
        number1 = number2;
        number2 = temp;
      }
    }
    if (operator === '*') {
      result = number1 * number2;
    }
    if (operator === '/') {
      number2 = Math.floor(Math.random() * (number1/2 -1))+1
      for(let i = number2; i > 0; i--) {
        if(number1 % i === 0) {
          number2 = i;
          break;
        }
      }
      result = number1 / number2;
    }

    return { number1, operator, number2, result };
  }

  allExercises(): Exercise[] {
    let exercises: Exercise[] = [];
    for (let i = 0; i < this.questions; i++) {
      exercises.push(this.generateExercise());
    }
    return exercises;
  }
}
