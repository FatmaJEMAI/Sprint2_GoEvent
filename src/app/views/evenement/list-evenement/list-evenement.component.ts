import { Component, OnInit } from '@angular/core';
import { evenement } from 'src/app/model/evenement';
import { evenementService } from 'src/app/services/evenement.service';

@Component({
  selector: 'app-list-evenement',
  templateUrl: './list-evenement.component.html',
  styleUrls: ['./list-evenement.component.css']
})
export class ListEvenementComponent implements OnInit {
list: evenement[];

  constructor( private evenementservice:evenementService) { }

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
