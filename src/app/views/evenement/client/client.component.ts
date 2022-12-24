import { Component, OnInit } from '@angular/core';
import { evenement } from 'src/app/model/evenement';
import { evenementService } from 'src/app/services/evenement.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
list:any;
  constructor(private evenementservice:evenementService) { }


  ngOnInit(): void {
    this.evenementservice.getListevenement().subscribe((data:evenement[])=>{
      console.log(data);
      this.list=data;
      // console.log(this.list);
    });
    }

}
