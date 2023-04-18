import { Component, Input } from '@angular/core';
import { QuestionObject } from '../Trivia.model';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent {
  @Input() triviaData: QuestionObject[] = [];
  currentQuestionIndex = 0;
  score: number = 0;

  onChoiceSelected(choiceSelected: number) {
    if(choiceSelected===1) {
      this.score = this.score + 1
    }
    this.currentQuestionIndex = this.currentQuestionIndex + 1;
  }
}
