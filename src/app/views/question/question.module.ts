import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { questionRoutingModule } from './question-routing.module';
import { FormquestionComponent } from './form-question/form-question.component';
import { ListquestionComponent } from './list-question/list-question.component';
import { FormsModule } from '@angular/forms';
import { editquestionComponent } from './editquestion/editquestion.component';


@NgModule({
  declarations: [
    FormquestionComponent,
    ListquestionComponent,
    editquestionComponent
  ],
  imports: [
    CommonModule,
    questionRoutingModule,
    FormsModule
  ]
})
export class questionModule { }
