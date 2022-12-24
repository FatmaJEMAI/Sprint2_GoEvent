import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { question } from '../model/question';


@Injectable({
  providedIn: 'root'
})
export class questionService {
  ////////////////////
  public url= environment.apiUrl+'question/'
  public list:question[];
  constructor(private http:HttpClient) {
  }
  getListquestion(){
    return this.http.get<question[]>(this.url+"affiche")
  }

  addquestion(p:any){
  return this.http.post(this.url+'add',p)
}
  deletequestion(id:number){
  return this.http.delete(this.url+'remove/'+id)
}
  updatequestion(id:number,p:question){
  return this.http.put(this.url+'update/'+id,p)
}
getquestionById(id:any){
  return this.http.get<question>(this.url+id)
}
   }



