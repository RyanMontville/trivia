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
  outputArray: {text: string,type:string,color:string}[] = [];
  @Input() set questionData(value: QuestionObject){
    this.question = value.question;
    this.questionStrg = JSON.stringify(value);
    this.correctAnswer = value.correctAnswer;
    this.answers = value.answers;
    if(value.type==="boolean") {
      this.outputArray.push({text: this.answers[0],type:"boolean-answer",color:"green"});
      this.outputArray.push({text: this.answers[1],type:"boolean-answer",color:"blue"});
    } else {
      this.outputArray.push({text: this.answers[0],type:"multiple-answer",color:"red"});
      this.outputArray.push({text: this.answers[1],type:"multiple-answer",color:"yellow"});
      this.outputArray.push({text: this.answers[2],type:"multiple-answer",color:"blue"});
      this.outputArray.push({text: this.answers[3],type:"multiple-answer",color:"green"});
    }
  } 
  @Output() choiceSelected = new EventEmitter<number>();

  handleChoice(choice: string) {
    this.outputArray = [];
    if(choice === this.correctAnswer){
      let resultText = "You guessed " + choice + " which is correct";
      this.outputArray.push({text:resultText,type:"result",color:"green"})

      setTimeout(() => {
        this.outputArray = [];
        this.choiceSelected.emit(1);
      }, 2000)

      
    } else {
      let resultText = "You guessed " + choice + " but it was " + this.correctAnswer;
      this.outputArray.push({text:resultText,type:"result",color:"red"})
      
      setTimeout(() => {
        this.outputArray = [];
        this.choiceSelected.emit(0);
      }, 2000)

    }
  }
}
