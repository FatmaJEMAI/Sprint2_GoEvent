import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { editComponent } from './edit/edit.component';
import { FormserviiceComponent } from './form-serviice/form-serviice.component';
import { ListserviiceComponent } from './list-serviice/list-serviice.component';

const routes: Routes = [
  {path:'',component:FormserviiceComponent},
  {path:'list',component:ListserviiceComponent},
  {path:'updateserviice/:id',component:editComponent},
  {path:'client',component:ClientComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class serviiceRoutingModule { }
