import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categorie } from 'src/app/model/categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-updatecategorie',
  templateUrl: './updatecategorie.component.html',
  styleUrls: ['./updatecategorie.component.css']
})
export class UpdatecategorieComponent implements OnInit {
 public categorie:categorie;
  constructor( private categorieservice:CategorieService,
    private router:Router,
    private currentRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.categorie=new categorie()
    this.categorieservice.getcategorieById(this.currentRoute.snapshot.params['id']).subscribe((data:any) => {this.categorie=data.categoriedata
    console.log(this.categorie)})
  }

onSubmit(){
  this.categorieservice.updatecategorie(this.categorie.id,this.categorie).subscribe(data=>this.router.navigate(['/categorie']))
}
}
