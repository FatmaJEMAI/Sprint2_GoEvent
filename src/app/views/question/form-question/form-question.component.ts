import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { question } from 'src/app/model/question';
import { questionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css']
})
export class FormquestionComponent implements OnInit {
  public action:string;
  public question:question
  constructor(private questionservice: questionService,
    private router:Router,
    private currentRoute:ActivatedRoute) { }

    ngOnInit(): void {
      console.log(this.currentRoute.snapshot.params['id'])
      //condition id
     let id=this.currentRoute.snapshot.params['id'];
     if(id!=null){
      this.action="update";
      //update

      // this.questionservice.getquestionById(id).subscribe(
      //   (data: question)=>this.question= data
      // )
      this.questionservice.getquestionById(id).subscribe(
         (data)=> {this.question = data}
      );
     }else{
      this.action="save"

     this.question = new question();
    }
     console.log(this.question)
    }
    savequestion(){
      if(this.action=="save"){

      // this.questionservice.save(this.question)
      this.questionservice.addquestion(this.question).subscribe(()=>this.router.navigate(['/list'])
      );
    }
    else{
      this.questionservice.updatequestion(this.question.id, this.question).subscribe(
        ()=>this.router.navigate(['/admin/question'])
      );
      }
    }

  }





