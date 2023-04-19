import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NgForm } from '@angular/forms';
import { Question, QuestionObject, Trivia } from '../Trivia.model';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent {
  @Output() dataCreated = new EventEmitter<QuestionObject[]>();
  numOfQuestions: number = 0;
  category: number = 0;
  difficulty: string = "";
  responseData: QuestionObject[] = []

  constructor(private http: HttpClient) { }

  getTriviaData() {
    this.http.get<Trivia>(`https://opentdb.com/api.php?amount=${this.numOfQuestions}&category=${this.category}&difficulty=${this.difficulty}`).subscribe(data => {
      if (data.response_code === 0) {

        for (let i = 0; i < data.results.length; i++) {
          let singleQuestion = new QuestionObject();
          singleQuestion.setQuestion(data.results[i].question);
          singleQuestion.setType(data.results[i].type);
          singleQuestion.setCategory(data.results[i].category)
          singleQuestion.setCorrectAnswer(data.results[i].correct_answer);
          let answerArray: string[] = [];
          if (data.results[i].type === "boolean") {
            answerArray.push("True", "False");
          } else {
            let randomNumber = Math.round(Math.random() * (4 - 1) + 1);
            let correct = data.results[i].correct_answer;
            let incorrect1 = data.results[i].incorrect_answers[0];
            let incorrect2 = data.results[i].incorrect_answers[1];
            let incorrect3 = data.results[i].incorrect_answers[2];
            if(randomNumber===1) {
              answerArray.push(correct,incorrect1,incorrect2,incorrect3);
            } else if(randomNumber===2) {
              answerArray.push(incorrect1,correct,incorrect2,incorrect3);
            } else if(randomNumber===3){
              answerArray.push(incorrect1,incorrect2,correct,incorrect3);
            } else {
              answerArray.push(incorrect1,incorrect2,incorrect3,correct);
            }
          }
          singleQuestion.setAnswers(answerArray);
          this.responseData.push(singleQuestion);
        }
        this.onDataCreated(this.responseData);
      }
    })
  }

  onDataCreated(data: QuestionObject[]) {
    this.dataCreated.emit(data);
  }

  onSubmit(f: NgForm) {
    this.category = f.value.category;
    this.difficulty = f.value.difficulty;
    this.numOfQuestions = f.value.numOfQuestions;
    this.getTriviaData();
  }

}
