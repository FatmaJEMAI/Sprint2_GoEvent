import { Component, OnInit } from '@angular/core';
import { evenement } from 'src/app/model/evenement';
import { evenementService } from 'src/app/services/evenement.service';
;

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListevenementComponent implements OnInit {
  public list : evenement[];
    constructor(private evenementservice:evenementService) { }

    ngOnInit(): void {
      this.evenementservice.getListevenement().subscribe((data:evenement[])=> this.list=data);
    }
  delete(evenement:evenement){
  this.evenementservice.deleteevenement(evenement.id).subscribe(
    ()=>{
      let i= this.list.indexOf(evenement);
      this.list.splice(i,1);
     }
  );
  }
  }
