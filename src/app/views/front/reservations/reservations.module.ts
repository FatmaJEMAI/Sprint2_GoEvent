import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations/reservations.component';


@NgModule({
  declarations: [
    ReservationsComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule
  ]
})
export class ReservationsModule { }
