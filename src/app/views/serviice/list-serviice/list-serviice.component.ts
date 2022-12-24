import { Component, OnInit } from '@angular/core';
import { serviice } from 'src/app/model/serviice';
import { serviiceService } from 'src/app/services/serviice.service';

@Component({
  selector: 'app-list-serviice',
  templateUrl: './list-serviice.component.html',
  styleUrls: ['./list-serviice.component.css']
})
export class ListserviiceComponent implements OnInit {
list: serviice[];
serviice: serviice;

  constructor( private serviiceservice:serviiceService) { }

  ngOnInit(): void {

    this.serviiceservice.getListserviice().subscribe((data:any)=> this.list=data.serviices);
  }
delete(serviice:serviice){
this.serviiceservice.deleteserviice(serviice.id).subscribe(
  (data:any)=>{

    let i= this.list.indexOf(serviice);
    this.list.splice(i,1);
   }
);
}





}
