import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { question } from '../model/question';


@Injectable({
  providedIn: 'root'
})
export class questionService {
  public url=' http://localhost:3000/question/'
  public list:question[];
  constructor(private http:HttpClient) {
  }
  getListquestion(){
    return this.http.get<question[]>(this.url)
  }
  addquestion(p:question){
  return this.http.post(this.url,p)
}
  deletequestion(id:number){
  return this.http.delete(this.url+id)
}
  updatequestion(id:number,p:question){
  return this.http.put(this.url+id,p)
}
getquestionById(id:number){
  return this.http.get<question>(this.url+id)
}
   }



