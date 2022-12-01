import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddreservationRoutingModule } from './addreservation-routing.module';
import { AddreservationComponent } from './addreservation/addreservation.component';


@NgModule({
  declarations: [
    AddreservationComponent
  ],
  imports: [
    CommonModule,
    AddreservationRoutingModule
  ]
})
export class AddreservationModule { }
