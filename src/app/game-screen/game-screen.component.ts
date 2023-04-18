import { Component, Input } from '@angular/core';
import { Question } from '../Trivia.model';

@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent {
  @Input() triviaData: Question[] = [];
  currentQuestionIndex = 0;
  answers: string[] = [];
}
