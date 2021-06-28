import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {stringConnection} from '../environmentKeys/sharedKeys'
import {ServiceInterface} from '../interfaces/serviceInterface';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  
  serviceToEdit = {};
  constructor( private _http:HttpClient) { }
   
  apiServices_URL = stringConnection+"services";
  
  
  //Get all services from API
   getListServices(): Observable<ServiceInterface[]>  {
    return this._http.get<ServiceInterface[]>(this.apiServices_URL)
  }
  
  //Create Service
  createService(servicio:any){
    return this._http.post(this.apiServices_URL,servicio)
  }
  
  //Edit one service
  editService(id:string, service:ServiceInterface){
    return this._http.put(`${this.apiServices_URL}/${id}`,service)
  }
  
  removeService(id:string){
    return this._http.delete(`${this.apiServices_URL}/${id}`)
  }
}
