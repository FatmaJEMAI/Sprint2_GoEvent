import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { categorie } from '../model/categorie';
import { evenement } from '../model/evenement';


@Injectable({
  providedIn: 'root'
})
export class evenementService {
  public url=environment.apiUrl+'evenement/'
  public list:evenement[];

  constructor(private http:HttpClient){

  }



  getListevenement(){

    return this.http.get<evenement[]>(this.url+"display")


  }

  addevenement(p:any){
  return this.http.post(this.url+'add',p)
}
  deleteevenement(id:number){
  return this.http.delete(this.url+'remove/'+id)
}
  updateevenement(id:number ,p:evenement) {
  return this.http.put(this.url+'update/'+id,p);
}
getevenementById(id:any){
  return this.http.get<evenement>(this.url+id)
}
}



