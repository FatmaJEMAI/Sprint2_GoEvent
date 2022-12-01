import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { evenement } from '../model/evenement';


@Injectable({
  providedIn: 'root'
})
export class evenementService {
  public url=' http://localhost:3000/evenement/'
  public list:evenement[];
  constructor(private http:HttpClient) {
  }
  getListevenement(){
    return this.http.get<evenement[]>(this.url)
  }
  addevenement(p:evenement){
  return this.http.post(this.url,p)
}
  deleteevenement(id:number){
  return this.http.delete(this.url+id)
}
  updateevenement(id:number,p:evenement){
  return this.http.put(this.url+id,p)
}
getevenementById(id:number){
  return this.http.get<evenement>(this.url+id)
}
   }



