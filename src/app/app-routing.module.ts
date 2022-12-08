import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackComponent } from './back-office/back/back.component';
import { FrontComponent } from './front-office/front/front.component';

const routes: Routes = [
  { path: '', component:FrontComponent ,children:[
    {path:'evenements',loadChildren:()=>import('./views/evenement/evenement.module').then(m=>m.EvenementModule)},
   // {path:'reservations',loadChildren:()=>import('./views/reservation/reservation.module').then(m=>m.ReservationModule)},
    {path:'quiz',loadChildren:()=>import('./views/quiz/quiz.module').then(m=>m.QuizModule)},
    {path:'question',loadChildren:()=>import('./views/question/question.module').then(m=>m.QuestionModule)}
  ] },
  { path: 'admin', component:BackComponent ,
children:[
  {path:'admin',loadChildren:()=>import('./views/admin/admin.module').then(m=>m.AdminModule)},

  {path:'evenement',loadChildren:()=>import('./views/evenement/evenement.module').then(m=>m.EvenementModule)},
  //{path:'reservation',loadChildren:()=>import('./views/reservation/reservation.module').then(m=>m.ReservationModule)},
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



















