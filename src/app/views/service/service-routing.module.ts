import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormserviceComponent } from './form-service/form-service.component';
import { ListServiceComponent } from './list-service/list-service.component';
//import { ListserviceComponent } from './list-service/list-service.component';

const routes: Routes = [
  {path:'',component:FormserviceComponent},
  {path:'',component:ListServiceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class serviceRoutingModule { }
