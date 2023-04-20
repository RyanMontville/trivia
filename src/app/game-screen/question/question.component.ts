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
      this.outputArray.push({text: this.answers[0],type:"boolean-answer",color:"green answer"});
      this.outputArray.push({text: this.answers[1],type:"boolean-answer",color:"blue answer"});
    } else {
      this.outputArray.push({text: this.answers[0],type:"multiple-answer",color:"red answer"});
      this.outputArray.push({text: this.answers[1],type:"multiple-answer",color:"yellow answer"});
      this.outputArray.push({text: this.answers[2],type:"multiple-answer",color:"blue answer"});
      this.outputArray.push({text: this.answers[3],type:"multiple-answer",color:"green answer"});
    }
  } 
  @Output() choiceSelected = new EventEmitter<number>();

  handleChoice(choice: string) {
    if(choice == this.correctAnswer){
      this.outputArray = [];
      this.outputArray.push({text:"Correct!",type:"result",color:"green full"});
      this.outputArray.push({text: this.correctAnswer,type:"result",color:"green full result-answer"});

      setTimeout(() => {
        this.outputArray = [];
        this.choiceSelected.emit(1);
      }, 2000)

      
    } else {
      this.outputArray = [];
      this.outputArray.push({text:"Incorrect",type:"result",color:"red full"});
      this.outputArray.push({text:choice,type:"result",color:"red half result-answer"});
      this.outputArray.push({text:this.correctAnswer,type:"result",color:"green half result-answer"})
      
      setTimeout(() => {
        this.outputArray = [];
        this.choiceSelected.emit(0);
      }, 2000)

    }
  }
}
