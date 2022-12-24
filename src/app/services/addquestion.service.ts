import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class addquestionService {

  constructor( private http:HttpClient) { }
  getAddquestionJson(){
    return this.http.get<any>("assets/addquestions.json");
  }






}
