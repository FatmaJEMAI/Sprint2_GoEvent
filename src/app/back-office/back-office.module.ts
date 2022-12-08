import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackComponent } from './back/back.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
//import { serviceModule } from '../views/service/service.module';



@NgModule({
  declarations: [
    BackComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
//serviceModule
  ]

  // exports: [
  //   BackComponent

  // ]
})
export class BackOfficeModule { }
