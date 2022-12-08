import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormquestionComponent } from './form-question/form-question.component';
import { ListquestionComponent } from './list-question/list-question.component';

const routes: Routes = [
  {path:'',component:FormquestionComponent},
  {path:'',component:ListquestionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
