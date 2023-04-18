import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {NgForm} from '@angular/forms';
import { Question, Trivia } from '../Trivia.model';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.css']
})
export class StartScreenComponent {
  @Output() dataCreated = new EventEmitter<Question[]>();
  numOfQuestions: number = 0;
  category: number = 0;
  difficulty: string = "";

  constructor(private http: HttpClient) {}

  getTriviaData() {
    this.http.get<Trivia>(`https://opentdb.com/api.php?amount=${this.numOfQuestions}&category=${this.category}&difficulty=${this.difficulty}`).subscribe(data => {
      if(data.response_code===0) {
        this.onDataCreated(data.results);
      }
    })
  }

  onDataCreated(data: Question[]) {
    this.dataCreated.emit(data);
  }

  onSubmit(f: NgForm) {
    this.category = f.value.category;
    this.difficulty = f.value.difficulty;
    this.numOfQuestions = f.value.numOfQuestions;
    this.getTriviaData();
  }

}
