import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Question, QuestionObject } from 'src/app/Trivia.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  question: string = ""; 
  questionStrg = "Error";
  correctAnswer = "";
  answers: string[] = [];
  @Input() set questionData(value: QuestionObject){
    this.question = value.question;
    this.questionStrg = JSON.stringify(value);
    this.correctAnswer = value.correctAnswer;
    this.answers = value.answers;

  } 
  @Output() choiceSelected = new EventEmitter<number>();

  handleChoice(choice: string) {
    if(choice === this.correctAnswer){
      alert("correct!");
      this.choiceSelected.emit(1);
    } else {
      alert("incorrect!" + " " + this.correctAnswer);
      this.choiceSelected.emit(0);
    }
  }
}
