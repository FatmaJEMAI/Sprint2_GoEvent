import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mainModule } from 'process';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { AddquizComponent } from './addquiz/addquiz.component';
import { BackComponent } from './back-office/back/back.component';
import { FrontComponent } from './front-office/front/front.component';
import { editquestionComponent } from './views/question/editquestion/editquestion.component';
import { ListquestionComponent } from './views/question/list-question/list-question.component';
import { EditeComponent } from './views/quiz/edite/edite.component';
import { FormquizComponent } from './views/quiz/form-quiz/form-quiz.component';
import { ListquizComponent } from './views/quiz/list-quiz/list-quiz.component';

const routes: Routes = [
  { path: '', component:FrontComponent ,children:[
    {path:'evenements',loadChildren:()=>import('./views/evenement/evenement.module').then(m=>m.EvenementModule)},
   // {path:'reservations',loadChildren:()=>import('./views/reservation/reservation.module').then(m=>m.ReservationModule)},
    {path:'quiz',component:ListquizComponent},
    //{path:'question',loadChildren:()=>import('./views/question/question.module').then(m=>m.QuestionModule)},
    {path:'question',component:ListquestionComponent},
    {path:"addquiz",component:AddquizComponent},
    {path:"addquestion",component:AddquestionComponent},
    {path:"quiz",component:FormquizComponent},
    {path:'updatequiz/:id',component:EditeComponent},
    {path:'updatequestion/:id',component:editquestionComponent}
  ] },
  { path: 'admin', component:BackComponent ,
children:[
  {path:'admin',loadChildren:()=>import('./views/admin/admin.module').then(m=>m.AdminModule)},

  {path:'evenement',loadChildren:()=>import('./views/evenement/evenement.module').then(m=>m.EvenementModule)},
  //{path:'reservation',loadChildren:()=>import('./views/reservation/reservation.module').then(m=>m.ReservationModule)},
  {path:'quiz',loadChildren:()=>import('./views/quiz/quiz.module').then(m=>m.QuizModule)},
  {path:'question',loadChildren:()=>import('./views/question/question.module').then(m=>m.questionModule)},
//{path:'edite',loadChildren:()=>import('./views/quiz/edite/edite.component').then(m=>m.EditeComponent)}
]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

