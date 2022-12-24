import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { question } from 'src/app/model/question';
import { questionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-editquestion',
  templateUrl: './editquestion.component.html',
  styleUrls: ['./editquestion.component.css']
})
export class editquestionComponent implements OnInit {
  public action:string;
  public question:question

  constructor(private questionservice: questionService,
    private router:Router,
    private currentRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.question=new question()
    this.questionservice.getquestionById(this.currentRoute.snapshot.params['id']).subscribe((data:any) => {this.question=data.questiondataa
    console.log(this.question)})
  }
  onSubmit(){
    this.questionservice.updatequestion(this.question.id,this.question).subscribe(data=>this.router.navigate(['/question']))
  }
  }

