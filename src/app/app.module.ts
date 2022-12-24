import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackOfficeModule } from './back-office/back-office.module';
import { FrontOfficeModule } from './front-office/front-office.module';
import { EvenementModule } from './views/evenement/evenement.module';
//import { QuestionModule } from './views/question/question.module';
import { QuizModule } from './views/quiz/quiz.module';
import { AddquizComponent } from './addquiz/addquiz.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { questionModule } from './views/question/question.module';
//import { EditeComponent } from './views/quiz/edite/edite.component';
import { FormsModule } from '@angular/forms';
import { ChangeBgDirective } from './change-bg.directive';
//import { EditeComponent } from './edite/edite.component';
//import { ReservationModule } from './views/reservation/reservation.module';

@NgModule({
  declarations: [
    AppComponent,
    AddquizComponent,
    AddquestionComponent,
    ChangeBgDirective,
    ///EditeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BackOfficeModule,
    FrontOfficeModule,
    //ReservationModule,
    EvenementModule,
    HttpClientModule,
  //  QuestionModule,
    QuizModule,
    questionModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
