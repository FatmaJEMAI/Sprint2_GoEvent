import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { service } from '../model/service';


@Injectable({
  providedIn: 'root'
})
export class serviceService {
  public url=' http://localhost:3000/service/'
  public list:service[];
  constructor(private http:HttpClient) {
  }
  getListservice(){
    return this.http.get<service[]>(this.url)
  }
  addservice(p:service){
  return this.http.post(this.url,p)
}
  deleteservice(id:number){
  return this.http.delete(this.url+id)
}
  updateservice(id:number,p:service){
  return this.http.put(this.url+id,p)
}
getserviceById(id:number){
  return this.http.get<service>(this.url+id)
}
   }



