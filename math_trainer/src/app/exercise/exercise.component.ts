import { Component, OnInit } from '@angular/core';
import { CalculationService, Exercise } from '../calculation.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ExerciseComponent {
  public quiz: Exercise[] = [];

  constructor(public calculation: CalculationService) {
    this.quiz = this.calculation.allExercises();
  }

  confirm: boolean = false;

  done(): void {
    this.confirm = true;
  }
}
