import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front/front.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    FrontComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
   AppRoutingModule
  ]
})
export class FrontOfficeModule { }
