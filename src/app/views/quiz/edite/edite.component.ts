import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { quiz } from 'src/app/model/quiz';
import { quizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-edite',
  templateUrl: './edite.component.html',
  styleUrls: ['./edite.component.css']
})
export class EditeComponent implements OnInit {
  public action:string;
  public quiz:quiz

  constructor(private quizservice: quizService,
    private router:Router,
    private currentRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.quiz=new quiz()
    this.quizservice.getquizById(this.currentRoute.snapshot.params['id']).subscribe((data:any) => {this.quiz=data.quizdata
    console.log(this.quiz)})
  }
  onSubmit(){
    this.quizservice.updatequiz(this.quiz.id,this.quiz).subscribe(data=>this.router.navigate(['/quiz']))
  }
  }

