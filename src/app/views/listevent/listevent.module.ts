import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeventRoutingModule } from './listevent-routing.module';
// import { ListEventComponent } from './list-event/list-event.component';
import { RouterModule } from '@angular/router';
import { ListevenementComponent } from './list-event/list-event.component';


@NgModule({
  declarations: [
    ListevenementComponent

  ],
  imports: [
    CommonModule,
    ListeventRoutingModule,
    RouterModule
  ]
})
export class ListeventModule { }
