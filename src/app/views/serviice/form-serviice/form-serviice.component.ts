import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { serviice } from 'src/app/model/serviice';
import { serviiceService } from 'src/app/services/serviice.service';

@Component({
  selector: 'app-form-serviice',
  templateUrl: './form-serviice.component.html',
  styleUrls: ['./form-serviice.component.css']
})
export class FormserviiceComponent implements OnInit {
@ViewChild('inputnom') inputnom!:ElementRef;
@ViewChild('inputtype') inputtype!:ElementRef;
@ViewChild('inputdescription') inputdescription!:ElementRef;
@ViewChild('inputcontact') inputcontact!:ElementRef;


  public action:string;
  public serviice:serviice
  constructor(private serviiceservice: serviiceService,
    private router:Router,
    private currentRoute:ActivatedRoute) { }

    ngOnInit(): void {
      console.log(this.currentRoute.snapshot.params['id'])
      //condition id
     let id=this.currentRoute.snapshot.params['id'];
     if(id!=null){
      this.action="update";
      //update

      // this.serviiceservice.getserviiceById(id).subscribe(
      //   (data: serviice)=>this.serviice= data
      // )
      this.serviiceservice.getserviiceById(id).subscribe(
         (data)=> {this.serviice = data}
      );
     }else{
      this.action="save"

     this.serviice = new serviice();

    }
     console.log(this.serviice)
    }
    saveserviice(){
      if(this.action=="save"){

let Service ={

   nom : this.inputnom.nativeElement.value,
   type : this.inputtype.nativeElement.value,
   contact : this.inputcontact.nativeElement.value,
   desc : this.inputdescription.nativeElement.value,
}

      // this.serviiceservice.save(this.serviice)
      this.serviiceservice.addserviice(Service).subscribe(()=>this.router.navigate(['/serviice'])
      );
    }
    else{
      this.serviiceservice.updateserviice(this.serviice.id, this.serviice).subscribe(
        ()=>this.router.navigate(['/admin/serviice'])
      );
      }
    }

  }





