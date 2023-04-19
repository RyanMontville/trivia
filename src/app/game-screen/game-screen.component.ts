import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuestionObject } from '../Trivia.model';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent {
  @Input() triviaData: QuestionObject[] = [];
  @Output() playerScore = new EventEmitter<{score: number, isGameOver: boolean}>();
  currentQuestionIndex = 0;
  score: number = 0;

  onChoiceSelected(choiceSelected: number) {
    
    if(this.currentQuestionIndex<this.triviaData.length-1){
      if(choiceSelected===1) {
        this.score = this.score + 1;
      }
      this.playerScore.emit({score: this.score, isGameOver: false});
      this.currentQuestionIndex = this.currentQuestionIndex + 1;
    } else {
      if(choiceSelected===1) {
        this.score = this.score + 1;
      }
      this.playerScore.emit({score: this.score, isGameOver: true});
    }
  }
}
