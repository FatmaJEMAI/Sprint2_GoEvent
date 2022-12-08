import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { service } from 'src/app/model/service';
//import { serviceService } from 'src/app/services/service';
import { serviceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-form-service',
  templateUrl: './form-service.component.html',
  styleUrls: ['./form-service.component.css']
})
export class FormserviceComponent implements OnInit {
  public action:string;
  public service:service
  constructor(private serviceservice: serviceService,
    private router:Router,
    private currentRoute:ActivatedRoute) { }

    ngOnInit(): void {
      console.log(this.currentRoute.snapshot.params['id'])
      //condition id
     let id=this.currentRoute.snapshot.params['id'];
     if(id!=null){
      this.action="update";
      //update

      // this.serviceservice.getserviceById(id).subscribe(
      //   (data: service)=>this.service= data
      // )
      this.serviceservice.getserviceById(id).subscribe(
         (data)=> {this.service = data}
      );
     }else{
      this.action="save"

     this.service = new service();
    }
     console.log(this.service)
    }
    saveservice(){
      if(this.action=="save"){

      // this.serviceservice.save(this.service)
      this.serviceservice.addservice(this.service).subscribe(()=>this.router.navigate(['/list'])
      );
    }
    else{
      this.serviceservice.updateservice(this.service.id, this.service).subscribe(
        ()=>this.router.navigate(['/admin/service'])
      );
      }
    }

  }





