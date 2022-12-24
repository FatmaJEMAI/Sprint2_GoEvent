import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackComponent } from './back-office/back/back.component';
import { FrontComponent } from './front-office/front/front.component';
import { ClientComponent } from './views/serviice/client/client.component';
import { editComponent } from './views/serviice/edit/edit.component';
import { FormserviiceComponent } from './views/serviice/form-serviice/form-serviice.component';
import { ListserviiceComponent } from './views/serviice/list-serviice/list-serviice.component';

const routes: Routes = [
  { path: '', component:FrontComponent ,children:[
    // {path:'evenements',loadChildren:()=>import('./views/evenement/evenement.module').then(m=>m.EvenementModule)},
    // {path:'reservations',loadChildren:()=>import('./views/reservation/reservation.module').then(m=>m.ReservationModule)},
    // {path:'quiz',loadChildren:()=>import('./views/quiz/quiz.module').then(m=>m.QuizModule)},
    // {path:'question',loadChildren:()=>import('./views/question/question.module').then(m=>m.QuestionModule)},
    // {path:'serviice',component:ListserviiceComponent},
    {path:'updateserviice/:id',component:editComponent},
    {path:'client',component:ClientComponent}



  ] },
  { path: 'admin', component:BackComponent ,
children:[
  {path:'admin',loadChildren:()=>import('./views/admin/admin.module').then(m=>m.AdminModule)},

  // {path:'evenement',loadChildren:()=>import('./views/evenement/evenement.module').then(m=>m.EvenementModule)},
  // {path:'reservation',loadChildren:()=>import('./views/reservation/reservation.module').then(m=>m.ReservationModule)},
  // {path:'quiz',loadChildren:()=>import('./views/quiz/quiz.module').then(m=>m.QuizModule)},
  // {path:'question',loadChildren:()=>import('./views/question/question.module').then(m=>m.QuestionModule)},
 { path:'listserviice',component:ListserviiceComponent},
 {path:'serviice',component:FormserviiceComponent},
     {path:'serviice',loadChildren:()=>import('./views/serviice/serviice.module').then(m=>m.serviiceModule)},



]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



















