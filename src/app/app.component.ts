import { Component, Input } from '@angular/core';
import { Question, QuestionObject, Trivia } from './Trivia.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'trivia';
  triviaData: QuestionObject[] = [];
  hasGameStarted: boolean = false;
  score: number = 0;
  numberOfQuestions: number = 0;

  onDataCreated(triviaData: QuestionObject[]) {
    this.title = triviaData[0].category;
    this.triviaData = triviaData;
    this.numberOfQuestions = triviaData.length;
    this.hasGameStarted = true;
  }
}
