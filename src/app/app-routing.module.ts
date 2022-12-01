import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackComponent } from './back-office/back/back.component';
import { FrontComponent } from './front-office/front/front.component';

const routes: Routes = [
  { path: '', component:FrontComponent ,children:[
    {path:'evenements',loadChildren:()=>import('./views/front/events/events.module').then(m=>m.EventsModule)},
    {path:'reservations',loadChildren:()=>import('./views/front/reservations/reservations.module').then(m=>m.ReservationsModule)},
  ] },
  { path: 'admin', component:BackComponent ,
children:[
  {path:'admin',loadChildren:()=>import('./views/admin/admin.module').then(m=>m.AdminModule)},
  {path:'addevent',loadChildren:()=>import('./views/addevent/addevent.module').then(m=>m.AddeventModule)},
  {path:'addreservation',loadChildren:()=>import('./views/addreservation/addreservation.module').then(m=>m.AddreservationModule)},
]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
