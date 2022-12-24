import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { categorie } from '../model/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  public url=environment.apiUrl+'categorie/'
  public list:categorie[];
  constructor(private http:HttpClient ) { }
  getListcategorie(){
    return this.http.get<categorie[]>(this.url+'affich')
  }
  addcategorie(p:any){
    return this.http.post(this.url+'ajout',p)
    }
  deletecategorie(id:number){
      return this.http.delete(this.url+'supprimer/'+id)
    }
  updatecategorie(id:number,p:categorie){
      return this.http.put(this.url+"modifier/"+id,p)
    }
  getcategorieById(id:number){
      return this.http.get<categorie>(this.url+id)
    }

}
