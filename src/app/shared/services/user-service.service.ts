import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { stringConnection } from "../environmentKeys/sharedKeys";
import { LoginResponse } from '../interfaces/responseLoginInterface';
import { User } from "../interfaces/userInterface";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private _http:HttpClient) { }
  
  apiServices_URL = stringConnection+'login';
  
  
  login(user:User): Observable<LoginResponse>{
    return this._http.post<LoginResponse>(this.apiServices_URL,user,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  };
}
