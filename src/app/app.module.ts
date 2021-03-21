import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalciComponent } from './calci/calci.component';
import { QuizComponent } from './quiz/home/quiz.component';
import { HeaderComponent } from './quiz/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsComponent } from './quiz/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    CalciComponent,
    QuizComponent,
    HeaderComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
