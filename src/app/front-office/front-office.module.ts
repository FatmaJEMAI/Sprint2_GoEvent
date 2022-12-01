import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front/front.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FrontComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FrontOfficeModule { }
