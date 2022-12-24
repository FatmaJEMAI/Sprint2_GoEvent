import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminreservationComponent } from './adminreservation/adminreservation.component';

import { FormreservationComponent } from './form-reservation/form-reservation.component';
import { ListreservationComponent } from './list-reservation/list-reservation.component';
import { UpdatereservationComponent } from './updatereservation/updatereservation.component';

const routes: Routes = [
  {path:'',component:FormreservationComponent},
  {path:'',component:ListreservationComponent},
  {path:'modifereservation/:id',component:UpdatereservationComponent},
  {path:'listes',component:AdminreservationComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
