import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/Trivia.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() questionData: Question = new Question("", "", "", "", "", []);
  answers: string[] = [];

  ngOnInit() {
    let randomNumber = Math.round(Math.random() * (4 - 1) + 1);
    if (this.questionData.type == "boolean") {
      this.answers.push("True");
      this.answers.push("False");
    } else {
      let correct = this.questionData.correct_answer;
      let incorrect1 = this.questionData.incorrect_answers[0];
      let incorrect2 = this.questionData.incorrect_answers[1];
      let incorrect3 = this.questionData.incorrect_answers[2];

      if(randomNumber===1) {
        this.answers.push(correct,incorrect1,incorrect2,incorrect3);
      } else if(randomNumber===2){
        this.answers.push(incorrect1,correct,incorrect2,incorrect3);
      } else if(randomNumber===3) {
        this.answers.push(incorrect1,incorrect2,correct,incorrect3);
      } else {
        this.answers.push(incorrect1,incorrect2,incorrect3,correct);
      }
    }

  }

  handleChoice(choice: string) {
    if(choice === this.questionData.correct_answer){
      alert("correct!");
    } else {
      alert("incorrect!" + " " + this.questionData.correct_answer);
    }
  }
}
