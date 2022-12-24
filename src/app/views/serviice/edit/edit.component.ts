import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { serviice } from 'src/app/model/serviice';
import { serviiceService } from 'src/app/services/serviice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class editComponent implements OnInit {
  public action:string;
  public serviice:serviice

  constructor(private serviiceservice: serviiceService,
    private router:Router,
    private currentRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.serviice=new serviice()
    this.serviiceservice.getserviiceById(this.currentRoute.snapshot.params['id']).subscribe((data:any) => {this.serviice=data.serviicedata
    console.log(this.serviice)})
  }
  onSubmit(){
    this.serviiceservice.updateserviice(this.serviice.id,this.serviice).subscribe(data=>this.router.navigate(['/serviice']))
  }
  }
