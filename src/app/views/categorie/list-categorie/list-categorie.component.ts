import { Component, OnInit } from '@angular/core';
import { categorie } from 'src/app/model/categorie';
import { CategorieService } from 'src/app/services/categorie.service';


@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListcategorieComponent implements OnInit {
list: categorie[];

  constructor( private categorieservice: CategorieService) { }

  ngOnInit(): void {

    this.categorieservice.getListcategorie().subscribe((data:any)=> this.list=data.categories);
  }
delete(categorie:categorie){
this.categorieservice.deletecategorie(categorie.id).subscribe(
  (data:any)=>{

    let i= this.list.indexOf(categorie);
    this.list.splice(i,1);
   }
);
}




}
