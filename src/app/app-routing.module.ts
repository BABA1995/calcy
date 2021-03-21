import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalciComponent } from './calci/calci.component';
import { QuizComponent } from './quiz/home/quiz.component';
import { QuestionsComponent } from './quiz/questions/questions.component';

const routes: Routes = [
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
  { path: 'calci', component: CalciComponent },
  { path: 'home', component: QuizComponent },
  { path: 'questions', component: QuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
