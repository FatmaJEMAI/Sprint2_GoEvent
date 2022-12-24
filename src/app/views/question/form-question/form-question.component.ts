import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { question } from 'src/app/model/question';
import { questionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-form-question',
  templateUrl: './form-question.component.html',
  styleUrls: ['./form-question.component.css']
})
export class FormquestionComponent implements OnInit {


  @ViewChild('inputnom') inputnom!:ElementRef;
  // @ViewChild('inputtype') inputtype!:ElementRef;
  // @ViewChild('inputdescription') inputdescription!:ElementRef;
  // @ViewChild('inputcontact') inputcontact!:ElementRef;


  public action:string;
  public question:question
  constructor(private questionservice: questionService,
    private router:Router,
    private currentRoute:ActivatedRoute) { }

    ngOnInit(): void {
this.question=new question()

    }
    savequestion(){


      this.questionservice.addquestion(this.question).subscribe(()=>this.router.navigate(['/question'])
      );}
    // onsubmit(){
    //     this.questionservice.updatequestion(this.question.id,this.question).subscribe(data=>this.router.navigate(['/question']))
    //   }

    }







