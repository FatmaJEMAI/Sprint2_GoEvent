import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvenementRoutingModule } from './evenement-routing.module';

import { FormEvenementComponent } from './form-evenement/form-evenement.component';
import { ListEvenementComponent } from './list-evenement/list-evenement.component';
import { FormsModule } from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { EditevenementComponent } from './editevenement/editevenement.component';


@NgModule({
  declarations: [

    FormEvenementComponent,
    ListEvenementComponent,
    ClientComponent,
    EditevenementComponent
  ],
  imports: [
    CommonModule,
    EvenementRoutingModule,
    FormsModule
  ]
})
export class EvenementModule { }
