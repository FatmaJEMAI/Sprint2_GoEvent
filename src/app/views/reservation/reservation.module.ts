import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { FormreservationComponent } from './form-reservation/form-reservation.component';
import { FormsModule } from '@angular/forms';
import { ListreservationComponent } from './list-reservation/list-reservation.component';
import { UpdatereservationComponent } from './updatereservation/updatereservation.component';
import { AdminreservationComponent } from './adminreservation/adminreservation.component';




@NgModule({
  declarations: [
    FormreservationComponent,
    ListreservationComponent,
    UpdatereservationComponent,
    AdminreservationComponent,


  ],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    FormsModule
  ]
})
export class ReservationModule { }
