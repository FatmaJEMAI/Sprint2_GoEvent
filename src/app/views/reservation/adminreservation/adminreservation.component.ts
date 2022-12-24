import { Component, OnInit } from '@angular/core';
import { reservation } from 'src/app/model/reservation';
import { reservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-adminreservation',
  templateUrl: './adminreservation.component.html',
  styleUrls: ['./adminreservation.component.css']
})
export class AdminreservationComponent implements OnInit {
  list: reservation[];

  constructor( private reservationservice:reservationService) { }

  ngOnInit(): void {

    this.reservationservice.getListreservation().subscribe((data:any)=> this.list=data.reservations);
  }
delete(reservation:reservation){
this.reservationservice.deletereservation(reservation.id).subscribe(
  (data:any)=>{

    let i= this.list.indexOf(reservation);
    this.list.splice(i,1);
   }
);
}

}
