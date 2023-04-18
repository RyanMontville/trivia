import { Component, Input } from '@angular/core';
import { Question, Trivia } from './Trivia.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'trivia';
  triviaData: Question[] = [];
  hasGameStarted: boolean = false;
  score: number = 0;
  numberOfQuestions: number = 0;

  onDataCreated(triviaData: Question[]) {
    this.title = triviaData[0].category;
    this.triviaData = triviaData;
    this.numberOfQuestions = triviaData.length;
    this.hasGameStarted = true;
  }
}
