import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeComponent } from './edite/edite.component';
import { FormquizComponent } from './form-quiz/form-quiz.component';
import { ListquizComponent} from './list-quiz/list-quiz.component';

const routes: Routes = [
  {path:'',component:FormquizComponent},
  {path:'list',component:ListquizComponent},
  {path:'updatequiz/:id',component:EditeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class QuizRoutingModule { }
