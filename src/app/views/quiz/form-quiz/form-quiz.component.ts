import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { quiz } from 'src/app/model/quiz';
import { quizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-form-quiz',
  templateUrl: './form-quiz.component.html',
  styleUrls: ['./form-quiz.component.css']
})
export class FormquizComponent implements OnInit {


  @ViewChild('inputnom') inputnom!:ElementRef;
  // @ViewChild('inputtype') inputtype!:ElementRef;
  // @ViewChild('inputdescription') inputdescription!:ElementRef;
  // @ViewChild('inputcontact') inputcontact!:ElementRef;


  public action:string;
  public quiz:quiz
  constructor(private quizservice: quizService,
    private router:Router,
    private currentRoute:ActivatedRoute) { }

    ngOnInit(): void {
this.quiz=new quiz()

    }
    savequiz(){


      this.quizservice.addquiz(this.quiz).subscribe(()=>this.router.navigate(['/quiz'])
      );}
    // onsubmit(){
    //     this.quizservice.updatequiz(this.quiz.id,this.quiz).subscribe(data=>this.router.navigate(['/quiz']))
    //   }

    }







