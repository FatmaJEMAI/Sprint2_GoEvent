import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddeventRoutingModule } from './addevent-routing.module';
import { addeventComponent } from './addevent/addevent.component';


@NgModule({
  declarations: [
    addeventComponent

  ],
  imports: [
    CommonModule,
    AddeventRoutingModule
  ]
})
export class AddeventModule { }
