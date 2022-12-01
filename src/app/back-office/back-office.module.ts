import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackComponent } from './back/back.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BackComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ]

  // exports: [
  //   BackComponent

  // ]
})
export class BackOfficeModule { }
