import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {stringConnection} from '../environmentKeys/sharedKeys'
import {ServiceInterface} from '../interfaces/serviceInterface';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  
  constructor( private _http:HttpClient) { }
   
  apiServices_URL = stringConnection+"services";
  
   getListServices(): Observable<ServiceInterface[]>  {
    return this._http.get<ServiceInterface[]>(this.apiServices_URL)
  }
}
