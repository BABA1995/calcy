import { style } from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questions: any;
  viewQuestions: any;
  value = 0;
  correct: any;
  incorrect: any;
  disable = false;
  totalRightanswer = 0;
  constructor(private quizQuestions: QuizService) {}

  ngOnInit(): void {
    this.quizQuestions.get().subscribe((res: any) => {
      this.questions = res.results;
      this.viewQuestions = this.questions.map((o: any, i: any) => {
        this.questions[i].incorrect_answers.push(
          this.questions[i].correct_answer
        );
        this.questions[i].incorrect_answers.sort(() => Math.random() - 0.5);
        return {
          question: this.questions[i].question,
          options: this.questions[i].incorrect_answers,
          correct: this.questions[i].correct_answer,
        };
      });
      console.log(this.viewQuestions);
    });
  }
  onSelect(a: any) {
    if (a == this.viewQuestions[this.value].correct) {
      this.correct = this.viewQuestions[this.value].correct;
      this.disable = true;
      this.totalRightanswer = this.totalRightanswer + 1;
    } else {
      this.incorrect = a;
      this.disable = true;
    }
  }
  onNext() {
    this.value = this.value + 1;
    this.disable = false;
  }
}
