import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { evenement } from 'src/app/model/evenement';
import { reservation } from 'src/app/model/reservation';
import { evenementService } from 'src/app/services/evenement.service';
import { reservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.css']
})
export class FormreservationComponent implements OnInit {
  @ViewChild('inputtype_reservation') inputtype_reservation!:ElementRef;
  @ViewChild('inputquantite_ticket') inputquantite_ticket!:ElementRef;
  @ViewChild('inputevenementId') inputevenementId!:ElementRef;
  @ViewChild('inputuserId') inputuserId!:ElementRef;

  evenementList:evenement[];
  public action:string;
  public reservation:reservation;
  constructor(private reservationservice: reservationService,
    private evenementservice: evenementService,
    private router:Router,
    private currentRoute:ActivatedRoute) { }

    ngOnInit(): void {

      // this.evenementservice.getListevenement().subscribe((data:evenement[])=>{
      //   let obj=JSON.parse(JSON.stringify(data))
      //   console.log(this.evenementList);
      //   this.evenementList=obj.evenements;
      // })

      // console.log(this.currentRoute.snapshot.params['id'])
      //condition id
     let id=this.currentRoute.snapshot.params['id'];
     if(id!=null){
      this.action="update";
      //update

      // this.reservationservice.getreservationById(id).subscribe(
      //   (data: reservation)=>this.reservation= data
      // )
      this.reservationservice.getreservationById(id).subscribe(
         (data)=> {this.reservation = data}
      );
     }else{
      this.action="save"

     this.reservation = new reservation();
    }
    //  console.log(this.reservation)
    }
    savereservation(){
      if(this.action=="save"){


      let Reservation={
       type_reservation:this.inputtype_reservation.nativeElement.value,
       quantite_ticket: this.inputquantite_ticket.nativeElement.value,
       evenementId:this.inputevenementId.nativeElement.value,
       userId:this.inputuserId.nativeElement.value,


}


      // this.reservationservice.save(this.reservation)
      this.reservationservice.addreservation(Reservation).subscribe(()=>this.router.navigate(['/reservations'])
      );
    }
    else{
      this.reservationservice.updatereservation(this.reservation.id, this.reservation).subscribe(
        ()=>this.router.navigate(['/admin/reservation'])
      );
      }
    }

  }





