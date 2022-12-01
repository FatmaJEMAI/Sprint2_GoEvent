import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementsComponent } from './evenements/evenements.component';

const routes: Routes = [
  {path:'',component:EvenementsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
