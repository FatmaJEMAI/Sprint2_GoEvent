import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { EditevenementComponent } from './editevenement/editevenement.component';
import { FormEvenementComponent } from './form-evenement/form-evenement.component';
import { ListEvenementComponent } from './list-evenement/list-evenement.component';

const routes: Routes = [
  {path:'',component:FormEvenementComponent},
  {path:'list',component:ListEvenementComponent},
  {path:'',component:ClientComponent},
  {path:'updateevenement/:id',component:EditevenementComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvenementRoutingModule { }
