import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEvenementComponent } from './form-evenement/form-evenement.component';
import { ListEvenementComponent } from './list-evenement/list-evenement.component';

const routes: Routes = [
  {path:'',component:FormEvenementComponent},
  {path:'',component:ListEvenementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvenementRoutingModule { }
