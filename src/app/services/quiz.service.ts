import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { quiz } from '../model/quiz';


@Injectable({
  providedIn: 'root'
})
export class quizService {
  ////////////////////
  public url= environment.apiUrl+'quiz/'
  public list:quiz[];
  constructor(private http:HttpClient) {
  }
  getListquiz(){
    return this.http.get<quiz[]>(this.url+"affiche")
  }
  addquiz(p:quiz){
  return this.http.post(this.url,p)
}
  deletequiz(id:number){
  return this.http.delete(this.url+id)
}
  updatequiz(id:number,p:quiz){
  return this.http.put(this.url+id,p)
}
getquizById(id:number){
  return this.http.get<quiz>(this.url+id)
}
   }




