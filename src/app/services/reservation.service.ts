import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { reservation } from '../model/reservation';


@Injectable({
  providedIn: 'root'
})
export class reservationService {
  public url=environment.apiUrl+'reservation/'
  public list:reservation[];
  constructor(private http:HttpClient) {
  }
  getListreservation(){
    return this.http.get<reservation[]>(this.url+'affiche')
  }
  addreservation(p:any){
  return this.http.post(this.url+'add',p)
}
  deletereservation(id:number){
  return this.http.delete(this.url+'supprimer/'+id)
}
  updatereservation(id:number,p:reservation){
  return this.http.put(this.url+"modifier/"+id,p)
}
getreservationById(id:any){
  return this.http.get<reservation>(this.url+id)
}
   }




