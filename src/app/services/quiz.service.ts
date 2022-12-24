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

  addquiz(p:any){
  return this.http.post(this.url+'add',p)
}
  deletequiz(id:number){
  return this.http.delete(this.url+'remove/'+id)
}
  updatequiz(id:number,p:quiz){
  return this.http.put(this.url+'update/'+id,p)
}
getquizById(id:any){
  return this.http.get<quiz>(this.url+id)
}
   }



