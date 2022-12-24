import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { quiz } from 'src/app/model/quiz';
import { quizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-form-quiz',
  templateUrl: './form-quiz.component.html',
  styleUrls: ['./form-quiz.component.css']
})
export class FormquizComponent implements OnInit {
  public action:string;
  public quiz:quiz
  constructor(private quizservice: quizService,
    private router:Router,
    private currentRoute:ActivatedRoute) { }

    ngOnInit(): void {
      console.log(this.currentRoute.snapshot.params['id'])
      //condition id
     let id=this.currentRoute.snapshot.params['id'];
     if(id!=null){
      this.action="update";
      //update

      // this.quizservice.getquizById(id).subscribe(
      //   (data: quiz)=>this.quiz= data
      // )
      this.quizservice.getquizById(id).subscribe(
         (data)=> {this.quiz = data}
      );
     }else{
      this.action="save"

     this.quiz = new quiz();
    }
     console.log(this.quiz)
    }
    savequiz(){
      if(this.action=="save"){

      // this.quizservice.save(this.quiz)
      this.quizservice.addquiz(this.quiz).subscribe(()=>this.router.navigate(['/list'])
      );
    }
    else{
      this.quizservice.updatequiz(this.quiz.id, this.quiz).subscribe(
        ()=>this.router.navigate(['/admin/quiz'])
      );
      }
    }

  }





