import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackComponent } from './back/back.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    BackComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]

  // exports: [
  //   BackComponent
    
  // ]
})
export class BackOfficeModule { }
