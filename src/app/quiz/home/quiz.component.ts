import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onStart(){
    this.route.navigateByUrl('questions');
  }
}
