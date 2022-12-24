import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { serviiceRoutingModule } from './serviice-routing.module';

import { FormserviiceComponent } from './form-serviice/form-serviice.component';
import { ListserviiceComponent } from './list-serviice/list-serviice.component';
import { FormsModule } from '@angular/forms';
import { editComponent } from './edit/edit.component';
import { ClientComponent } from './client/client.component';


@NgModule({
  declarations: [

    FormserviiceComponent,
    ListserviiceComponent,
    editComponent,
    ClientComponent
  ],
  imports: [
    CommonModule,
    serviiceRoutingModule,
    FormsModule
  ]
})
export class serviiceModule { }
