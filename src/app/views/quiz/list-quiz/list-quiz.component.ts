import { Component, OnInit } from '@angular/core';
import { quiz } from 'src/app/model/quiz';
import { quizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListquizComponent implements OnInit {
list: quiz[];
quiz:quiz;


  constructor( private quizservice:quizService) { }

  ngOnInit(): void {

    this.quizservice.getListquiz().subscribe((data:any)=> this.list=data.quizs);
  }
delete(quiz:quiz){
this.quizservice.deletequiz(quiz.id).subscribe(
  (data:any)=>{

    let i= this.list.indexOf(quiz);
    this.list.splice(i,1);
   }
);
}

}
