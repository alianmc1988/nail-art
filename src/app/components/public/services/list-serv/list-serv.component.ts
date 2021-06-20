import { Component, OnInit } from '@angular/core';
import {ServiciosService} from '../../../../shared/services/servicios.service';
import {ServiceInterface} from '../../../../shared/interfaces/serviceInterface';

@Component({
  selector: 'app-list-serv',
  templateUrl: './list-serv.component.html',
  styleUrls: ['./list-serv.component.css']
})
export class ListServComponent implements OnInit {
  // Arr variable to fill the component
  servicios: ServiceInterface[] = [];
  constructor(private _services:ServiciosService) { }

  ngOnInit(): void {
    // Aquiring data from the API
    this._services.getListServices().subscribe(data => {
      this.servicios = data;
    });
  }

} 
