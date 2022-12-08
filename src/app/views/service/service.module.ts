import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { serviceRoutingModule } from './service-routing.module';
//import { FormserviceComponent } from './form-service/form-service.component';
//import { ListserviceComponent } from './list-service/list-service.component';
import { FormsModule } from '@angular/forms';
import { FormserviceComponent } from './form-service/form-service.component';
import { ListServiceComponent } from './list-service/list-service.component';


@NgModule({
  declarations: [
    FormserviceComponent,
    ListServiceComponent
  ],
  imports: [
    CommonModule,
    serviceRoutingModule,
    FormsModule
  ]
})
export class serviceModule { }
