import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { question } from '../model/question';
import { addquestionService } from '../services/addquestion.service';
import { questionService } from '../services/question.service';
//import{addqestions}

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
     public name:string="";
     public addquestionList:any=[];
     public currentAddquestion:number=0;
     public points:number=0;
     counter=60;
     correctAnswer:number=0;
     inCorrectAnswer:0;
     interval$:any;
     progress:string="0";
     isQuizCompleted : boolean=false;
  constructor(
    private addquestionservice :addquestionService,
    private questionservice : questionService
    ) { }


  ngOnInit(): void {


   this.name=localStorage.getItem("name")!;
   this.getAlladdquestions();
   this.startCounter();
  }

    getAlladdquestions(){
      this.addquestionservice.getAddquestionJson()
      .subscribe(res=>{
       this.addquestionList = res.addquestions;
      })

    }
    nextQuestion(){
     this.currentAddquestion++;

    }
    previousQuestion(){
      this.currentAddquestion--;

    }


      answer(currentAddque:number,option:any){

        if(currentAddque === this.addquestionList.length){
          this.isQuizCompleted = true;
          this.stopCounter();
        }

      if(option.correct)
        {
          this.points+=10;
          this.correctAnswer++;

          setTimeout(()=>{
            this.getProgressParcent();
            this.resetCounter();
            this.currentAddquestion++;

          },1000);


        }else{

          setTimeout(()=>{
          this.currentAddquestion++;
          this.inCorrectAnswer++;
          this.getProgressParcent();
          this.resetCounter();

        },1000);
          this.points-=10;
        }

      }
    startCounter(){
        this.interval$ = interval(1000)
        .subscribe(val=>{
          this.counter--;
          if(this.counter===0){
            this.currentAddquestion++;
            this.counter=60;
            this.points-=10;

          }
        });
        setTimeout(()=>{
         this.interval$.unsubscribe();
        },6000000);
    }
    stopCounter(){
        this.interval$.unsubscribe();
        this.counter=0;


    }
      resetCounter(){
        this.stopCounter();
        this.counter=60;
        this.startCounter();
      }
       resetQuiz  (){
      this.resetCounter();
      this.getAlladdquestions();
      this.points=0;
      this.counter=60;
      this.currentAddquestion=0;
      this.progress="0";
    }

    getProgressParcent(){
      this.progress = ((this.currentAddquestion/this.addquestionList.length)*100).toString();
       return this.progress;
    }
}







