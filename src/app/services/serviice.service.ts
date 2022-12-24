import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { serviice } from '../model/serviice';


@Injectable({
  providedIn: 'root'
})
export class serviiceService {
  public url= environment.apiUrl+'serviice/'
  public list:serviice[];
  constructor(private http:HttpClient) {
  }
  getListserviice(){
    return this.http.get<serviice[]>(this.url+"affiche")
  }
  addserviice(p:any){
  return this.http.post(this.url+'add',p)
}
  deleteserviice(id:number){
  return this.http.delete(this.url+'remove/'+id)
}
  updateserviice(id:number,p:serviice){
  return this.http.put(this.url+'update/'+id,p)
}
getserviiceById(id:number){
  return this.http.get<serviice>(this.url+id)
}
   }



