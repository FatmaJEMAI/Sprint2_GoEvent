import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddreservationComponent } from './addreservation/addreservation.component';

const routes: Routes = [
  {path:'',component:AddreservationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddreservationRoutingModule { }
