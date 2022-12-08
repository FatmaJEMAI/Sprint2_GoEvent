import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { evenement } from 'src/app/model/evenement';
import { evenementService } from 'src/app/services/evenement.service';

@Component({
  selector: 'app-form-evenement',
  templateUrl: './form-evenement.component.html',
  styleUrls: ['./form-evenement.component.css']
})
export class FormEvenementComponent implements OnInit {
  public action:string;
  public evenement:evenement
  constructor(private evenementservice: evenementService,
    private router:Router,
    private currentRoute:ActivatedRoute) { }

    ngOnInit(): void {
      console.log(this.currentRoute.snapshot.params['id'])
      //condition id
     let id=this.currentRoute.snapshot.params['id'];
     if(id!=null){
      this.action="update";
      //update

      // this.evenementservice.getevenementById(id).subscribe(
      //   (data: evenement)=>this.evenement= data
      // )
      this.evenementservice.getevenementById(id).subscribe(
         (data)=> {this.evenement = data}
      );
     }else{
      this.action="save"

     this.evenement = new evenement();
    }
     console.log(this.evenement)
    }
    saveEvenement(){
      if(this.action=="save"){

      // this.evenementservice.save(this.evenement)
      this.evenementservice.addevenement(this.evenement).subscribe(()=>this.router.navigate(['/list'])
      );
    }
    else{
      this.evenementservice.updateevenement(this.evenement.id, this.evenement).subscribe(
        ()=>this.router.navigate(['/admin/evenement'])
      );
      }
    }

  }





