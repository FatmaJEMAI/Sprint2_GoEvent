import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { editquestionComponent } from './editquestion/editquestion.component';
import { FormquestionComponent } from './form-question/form-question.component';
import { ListquestionComponent} from './list-question/list-question.component';

const routes: Routes = [
  {path:'',component:FormquestionComponent},
  {path:'question',component:ListquestionComponent},
  {path:'updatequestion/:id',component:editquestionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class questionRoutingModule { }







