import { Component, Input } from '@angular/core';
import { Question, QuestionObject, Trivia } from './Trivia.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Trivia';
  triviaData: QuestionObject[] = [];
  hasGameStarted: boolean = false;
  score: number = 0;
  numberOfQuestions: number = 0;
  hasGameEnded: boolean = false;

  onDataCreated(triviaData: QuestionObject[]) {
    this.title = triviaData[0].category;
    this.triviaData = triviaData;
    this.numberOfQuestions = triviaData.length;
    this.hasGameStarted = true;
  }

  onScoreChange(response: {score: number, isGameOver: boolean}) {
    this.score = response.score;
    if(response.isGameOver){
      this.hasGameEnded = true;
    }
  }

  playAgain() {
    this.hasGameStarted = false;
    this.hasGameEnded = false;
    this.score = 0;
    this.numberOfQuestions = 0;
    this.title = "Trivia"
  }
}
