import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvenementRoutingModule } from './evenement-routing.module';

import { FormEvenementComponent } from './form-evenement/form-evenement.component';
import { ListEvenementComponent } from './list-evenement/list-evenement.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    FormEvenementComponent,
    ListEvenementComponent
  ],
  imports: [
    CommonModule,
    EvenementRoutingModule,
    FormsModule
  ]
})
export class EvenementModule { }
