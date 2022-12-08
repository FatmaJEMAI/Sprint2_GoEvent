import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { FormquizComponent } from './form-quiz/form-quiz.component';
import { ListquizComponent } from './list-quiz/list-quiz.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormquizComponent,
    ListquizComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    FormsModule
  ]
})
export class QuizModule { }
