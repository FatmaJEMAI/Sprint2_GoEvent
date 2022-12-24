import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorieRoutingModule } from './categorie-routing.module';

import { FormsModule } from '@angular/forms';
import { FormcategorieComponent } from './form-categorie/form-categorie.component';
import { ListcategorieComponent } from './list-categorie/list-categorie.component';
import { UpdatecategorieComponent } from './updatecategorie/updatecategorie.component';


@NgModule({
  declarations: [
    FormcategorieComponent,
    ListcategorieComponent,
    UpdatecategorieComponent



  ],
  imports: [
    CommonModule,
    CategorieRoutingModule,
    FormsModule
  ]
})
export class CategorieModule { }
