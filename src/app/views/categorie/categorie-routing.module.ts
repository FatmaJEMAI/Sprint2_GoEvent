import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditevenementComponent } from '../evenement/editevenement/editevenement.component';
import { FormcategorieComponent } from './form-categorie/form-categorie.component';
import { ListcategorieComponent } from './list-categorie/list-categorie.component';
import { UpdatecategorieComponent } from './updatecategorie/updatecategorie.component';

const routes: Routes = [
  {path:'list',component:ListcategorieComponent},
  {path:'',component:FormcategorieComponent},
  {path:'editecategorie/:id',component:UpdatecategorieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
