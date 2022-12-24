import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackComponent } from './back-office/back/back.component';
import { FrontComponent } from './front-office/front/front.component';
import { FormcategorieComponent } from './views/categorie/form-categorie/form-categorie.component';
import { ListcategorieComponent } from './views/categorie/list-categorie/list-categorie.component';
import { ClientComponent } from './views/evenement/client/client.component';
import { EditevenementComponent } from './views/evenement/editevenement/editevenement.component';
import { FormEvenementComponent } from './views/evenement/form-evenement/form-evenement.component';
import { ListEvenementComponent } from './views/evenement/list-evenement/list-evenement.component';
import { HomeComponent } from './views/home/home/home.component';
import { AdminreservationComponent } from './views/reservation/adminreservation/adminreservation.component';
import { FormreservationComponent } from './views/reservation/form-reservation/form-reservation.component';
import { ListreservationComponent } from './views/reservation/list-reservation/list-reservation.component';
import { UpdatereservationComponent } from './views/reservation/updatereservation/updatereservation.component';

const routes: Routes = [
  { path: '', component:FrontComponent ,children:[
    // {path:'evenements',component:ListEvenementComponent},
    {path:'categories',component:ListcategorieComponent},
    {path:'home',component:HomeComponent},
    {path:'client',component:ClientComponent},
    {path:'update',component:UpdatereservationComponent},

    // {path:'evenements',loadChildren:()=>import('./views/evenement/evenement.module').then(m=>m.EvenementModule)},
    {path:'reservations',loadChildren:()=>import('./views/reservation/reservation.module').then(m=>m.ReservationModule)},
    {path:'reservation',component:ListreservationComponent},
    {path:'modifereservation/:id',component:UpdatereservationComponent},
    {path:'quiz',loadChildren:()=>import('./views/quiz/quiz.module').then(m=>m.QuizModule)},
    {path:'question',loadChildren:()=>import('./views/question/question.module').then(m=>m.QuestionModule)}
  ] },
  { path: 'admin', component:BackComponent ,
children:[
  // {path:'evenement',component:FormEvenementComponent},
  {path:'admin',loadChildren:()=>import('./views/admin/admin.module').then(m=>m.AdminModule)},

  {path:'categorie',loadChildren:()=>import('./views/categorie/categorie.module').then(m=>m.CategorieModule)},
  {path:'editecategorie/:id',component:EditevenementComponent},
  // {path:'categories',component:ListcategorieComponent},
{path:'listes',component:AdminreservationComponent},
 {path:'evenement',loadChildren:()=>import('./views/evenement/evenement.module').then(m=>m.EvenementModule)},
 {path:'updateevenement/:id',component:EditevenementComponent},
//  {path:'reservation',component:ListreservationComponent},
//  {path:'modifereservation/:id',component:UpdatereservationComponent},
  // {path:'reservation',loadChildren:()=>import('./views/reservation/reservation.module').then(m=>m.ReservationModule)},
  {path:'quiz',loadChildren:()=>import('./views/quiz/quiz.module').then(m=>m.QuizModule)},
  {path:'question',loadChildren:()=>import('./views/question/question.module').then(m=>m.QuestionModule)},


]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



















