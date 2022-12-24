import { Component, OnInit } from '@angular/core';
import { question } from 'src/app/model/question';
import { questionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListquestionComponent implements OnInit {
list: question[];
question:question;

  constructor( private questionservice:questionService) { }

  ngOnInit(): void {

    this.questionservice.getListquestion().subscribe((data:any)=> this.list=data.questions);
  }
delete(question:question){
this.questionservice.deletequestion(question.id).subscribe(
  (data:any)=>{

    let i= this.list.indexOf(question);
    this.list.splice(i,1);
   }
);
}


}
