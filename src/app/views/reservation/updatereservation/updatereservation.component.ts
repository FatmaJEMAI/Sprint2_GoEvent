import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categorie } from 'src/app/model/categorie';
import { evenement } from 'src/app/model/evenement';
import { reservation } from 'src/app/model/reservation';
import { evenementService } from 'src/app/services/evenement.service';
import { reservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-updatereservation',
  templateUrl: './updatereservation.component.html',
   styleUrls: ['./updatereservation.component.css']
})
export class UpdatereservationComponent implements OnInit {
  list:evenement[];
 evenementList:evenement[];
  public action : string;
  public reservation:reservation;
  public evenement:evenement;


  constructor(private reservationservice:reservationService,
    private evenementservice:evenementService,
    private router:Router,
    private currentRoute:ActivatedRoute) { }

    ngOnInit(): void {
      // this.evenementservice.getListevenement().subscribe((data:evenement[])=> {
      //   let obj=JSON.parse(JSON.stringify(data))
      //   console.log(this.evenementList);
      //   this.evenementList=obj.categories;
      // });


      this.reservation=new reservation()
      this.reservationservice.getreservationById(this.currentRoute.snapshot.params['id']).subscribe((data:any) => {this.reservation=data.reservationdata
      console.log(this.reservation)})
      }

  onSubmit(){
    this.reservationservice.updatereservation(this.reservation.id,this.reservation).subscribe(data=>this.router.navigate(['/reservation']))
  }

}

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { evenement } from 'src/app/model/evenement';
// import { reservation } from 'src/app/model/reservation';
// import { evenementService } from 'src/app/services/evenement.service';
// import { reservationService } from 'src/app/services/reservation.service';

// @Component({
//   selector: 'app-updatereservation',
//   templateUrl: './updatereservation.component.html',
//   styleUrls: ['./updatereservation.component.css']
// })
// export class UpdatereservationComponent implements OnInit {
//   evenementList:evenement[];
//   public reservation:reservation;
//   public list:reservation[];
//   public listes:evenement[];
//   public evenement:evenement;
//   constructor( private reservationservice:reservationService, private evenementservice:evenementService,
//      private router:Router,private currentRoute:ActivatedRoute) { }


//   ngOnInit(): void {
//     let id = this.currentRoute.snapshot.params['id'];
//     console.log(this.currentRoute)
//     this.reservationservice.getreservationById(id).subscribe((data)=>{this.reservation=data;console.log(this.reservation)});
//     this.evenementservice.getListevenement().subscribe((data:evenement[])=>{this.listes=data
//       console.log(this.listes)});
//       this.reservation.evenementId= this.evenement.id;
//   }
//   updateReservation(){
//     this.reservationservice.updatereservation(this.reservation.id, this.reservation).subscribe(
//       (result)=>{
//         console.log(result)
//         this.router.navigate(['/admin/reservation'])
//       }
//     )
//   }
// }
