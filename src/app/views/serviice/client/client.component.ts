import { Component, OnInit } from '@angular/core';
import { avis } from 'src/app/model/avis';
import { serviice } from 'src/app/model/serviice';
import { serviiceService } from 'src/app/services/serviice.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  client : serviice[];
  serviice: serviice;
  aviss : avis[];
  avis: avis;
  constructor( private serviiceservice:serviiceService) { }
  ngOnInit(): void {

    this.serviiceservice.getListserviice().subscribe((data:any)=> this.client=data.serviices);
  }
delete(serviice:serviice){
this.serviiceservice.deleteserviice(serviice.id).subscribe(
  (data:any)=>{

    let i= this.client.indexOf(serviice);
    this.client.splice(i,1);
  }
  );
  }





  }
