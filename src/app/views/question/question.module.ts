import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { FormquestionComponent } from './form-question/form-question.component';
import { ListquestionComponent } from './list-question/list-question.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormquestionComponent,
    ListquestionComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    FormsModule
  ]
})
export class QuestionModule { }
