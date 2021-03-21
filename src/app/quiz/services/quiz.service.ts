import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  get(){
   
    let a = this.http.get("https://opentdb.com/api.php?amount=10&category=17&difficulty=hard&type=multiple")
    return a;
  }
}
