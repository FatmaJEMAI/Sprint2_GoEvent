import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categorie } from 'src/app/model/categorie';
import { CategorieService } from 'src/app/services/categorie.service';


@Component({
  selector: 'app-form-categorie',
  templateUrl: './form-categorie.component.html',
  styleUrls: ['./form-categorie.component.css']
})
export class FormcategorieComponent implements OnInit {
  @ViewChild('inputnom') inputnom!:ElementRef;
  public action:string;
  public categorie:categorie
  constructor(private categoriservice: CategorieService,
    private router:Router,
    private currentRoute:ActivatedRoute) { }

    ngOnInit(): void {
      console.log(this.currentRoute.snapshot.params['id'])
      //condition id
     let id=this.currentRoute.snapshot.params['id'];
     if(id!=null){
      this.action="update";
      //update

      // this.categorieservice.getcategorieById(id).subscribe(
      //   (data: categorie)=>this.categorie= data
      // )
      this.categoriservice.getcategorieById(id).subscribe(
         (data)=> {this.categorie = data}
      );
     }else{
      this.action="save"

     this.categorie = new categorie();
    }
     console.log(this.categorie)
    }
    savecategorie(){
      if(this.action=="save"){
     let Categorie ={
      nom: this.inputnom.nativeElement.value,
     }
      // this.categorieservice.save(this.categorie)
      this.categoriservice.addcategorie(Categorie).subscribe(()=>this.router.navigate(['/categorie'])
      );
    }
    else{
      this.categoriservice.updatecategorie(this.categorie.id, this.categorie).subscribe(
        ()=>this.router.navigate(['/admin/categorie'])
      );
      }
    }

  }





