import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addeventComponent } from './addevent/addevent.component';
//import { ListevenementComponent } from './list-event/list-event.component';

const routes: Routes = [
  {path:'',component:addeventComponent},
 // {path:'',component:ListevenementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddeventRoutingModule { }
