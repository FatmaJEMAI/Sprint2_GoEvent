import { Component,ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categorie } from 'src/app/model/categorie';
import { evenement } from 'src/app/model/evenement';
import { CategorieService } from 'src/app/services/categorie.service';
import { evenementService } from 'src/app/services/evenement.service';

@Component({
  selector: 'app-form-evenement',
  templateUrl: './form-evenement.component.html',
  styleUrls: ['./form-evenement.component.css']
})
export class FormEvenementComponent implements OnInit {
  @ViewChild('inputnom_event') inputnom_event!:ElementRef;
  @ViewChild('inputlieux_event') inputlieux_event!:ElementRef;
  @ViewChild('inputdescription') inputdescription!:ElementRef;
  @ViewChild('inputprix') inputprix!:ElementRef;
  @ViewChild('inputstock_ticket') inputstock_ticket!:ElementRef;
  @ViewChild('inputdate') inputdate!:ElementRef;
  @ViewChild('inputtype_event') inputtype_event!:ElementRef;
  @ViewChild('inputcategorieId') inputcategorieId!:ElementRef;

  categorieList:categorie[];
  public action:string;
  public evenement:evenement;
  constructor(private evenementservice: evenementService,
    private categorieservice: CategorieService,
    private router:Router,
    private currentRoute:ActivatedRoute) { }

    ngOnInit(): void {

    this.categorieservice.getListcategorie().subscribe((data:categorie[])=> {
      let obj=JSON.parse(JSON.stringify(data))
      console.log(this.categorieList);
      this.categorieList=obj.categories;
    });
      // console.log(this.currentRoute.snapshot.params['id'])
      //condition id
     let id=this.currentRoute.snapshot.params['id'];
     if(id!=null){
      this.action="update";
      //update

      // this.evenementservice.getevenementById(id).subscribe(
      //   (data: evenement)=>this.evenement= data
      // )

      this.evenementservice.getevenementById(id).subscribe(
         (data)=> {this.evenement = data}
      );
     }else{
      this.action="save"

     this.evenement = new evenement();
    }
    //  console.log(this.evenement)
    }
    saveEvenement(){
      if(this.action=="save"){

        let Evenement ={
          nom_event: this.inputnom_event.nativeElement.value,
          lieux_event :this.inputlieux_event.nativeElement.value,
          description:this.inputdescription.nativeElement.value ,
          prix:this.inputprix.nativeElement.value ,
          stock_ticket:this.inputstock_ticket.nativeElement.value ,
          date:this.inputdate.nativeElement.value,
          type_event:this.inputtype_event.nativeElement.value,
          categorieId:this.inputcategorieId.nativeElement.value,

        }

      // this.evenementservice.save(this.evenement)
      this.evenementservice.addevenement(this.evenement).subscribe(()=>this.router.navigate
      (['/evenement'])
      );
    }
    // else{
    //   this.evenementservice.updateevenement(this.evenement.id ,this.evenement).subscribe(

    //     ()=>this.router.navigate(['/admin/evenement']))
    //   ;
    //   }

    }

  }





