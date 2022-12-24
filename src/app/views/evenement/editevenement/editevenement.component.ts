import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categorie } from 'src/app/model/categorie';
import { evenement } from 'src/app/model/evenement';
import { CategorieService } from 'src/app/services/categorie.service';
import { evenementService } from 'src/app/services/evenement.service';

@Component({
  selector: 'app-editevenement',
  templateUrl: './editevenement.component.html',
  styleUrls: ['./editevenement.component.css']
})
export class EditevenementComponent implements OnInit {
  categorieList:categorie[];
  public action : string;
  public evenement:evenement;


  constructor(private evenementservice:evenementService,
    private categorieservice:CategorieService,
    private router:Router,
    private currentRoute:ActivatedRoute) { }

    ngOnInit(): void {
      this.categorieservice.getListcategorie().subscribe((data:categorie[])=> {
        let obj=JSON.parse(JSON.stringify(data))
        console.log(this.categorieList);
        this.categorieList=obj.categories;
      });
      this.evenement=new evenement()
      this.evenementservice.getevenementById(this.currentRoute.snapshot.params['id']).subscribe((data:any) => {this.evenement=data.evenementdata
      console.log(this.evenement)})
    }

  onSubmit(){
    this.evenementservice.updateevenement(this.evenement.id,this.evenement).subscribe(data=>this.router.navigate(['/evenement']))
  }

}
