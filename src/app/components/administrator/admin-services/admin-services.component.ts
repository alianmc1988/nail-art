import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceInterface } from 'src/app/shared/interfaces/serviceInterface';
import { ServiciosService } from 'src/app/shared/services/servicios.service';

@Component({
  selector: 'app-admin-services',
  templateUrl: './admin-services.component.html',
  styleUrls: ['./admin-services.component.css']
})
export class AdminServicesComponent implements OnInit {
  
  services:ServiceInterface[] = []; //List of services to use in template
  service_to_change = {}; //Object service already edited to save in DB
  show_edit_form = false; //Flag for edit form to show
  //service_to_edit: FormGroup;
  temp_service:ServiceInterface | any;
  
  
  constructor(private _servicio:ServiciosService, private _router:Router, private _builder:FormBuilder) {
    // this.service_to_edit = this._builder.group({
    //   service_name:['',[Validators.required,Validators.maxLength(20)]],
    //   description:['',[Validators.required,Validators.maxLength(100)]],
    //   price:['',Validators.required] 
    // })
  }

  ngOnInit(): void {
    this.listarServices();
  }
  
  //List os services from API
  listarServices(){
    this._servicio.getListServices().subscribe(data =>{
      this.services = data
      console.log(this.services)
    });
  }
  
  //Edit one service
  editService(){
    const temp = {
      _id:this.temp_service._id,
      service_name: (document.getElementById('service_name')as HTMLInputElement).value,
      description: (document.getElementById('description')as HTMLInputElement).value,
      price: parseInt((document.getElementById('price')as HTMLInputElement).value)
    }
    this._servicio.editService(temp._id, temp).subscribe(
    data=>{console.log(data)
      //this.service_to_edit.reset();
      this.show_edit_form=false;
      this.ngOnInit();
      this._router.navigate(['/admin'])
    },
    err=>{console.log(err)}
    )
  }
  
  openToEdit(servicio:ServiceInterface){
    this.temp_service = servicio;
    this.show_edit_form = true;
    console.log(this.temp_service)
  }
  
  //Remove service in DB
  removeService(id:string){
    let confirmation = confirm("Seguro desea eliminar este servicio?")
     if(confirmation){
       let a = this._servicio.removeService(id).subscribe(
          data => {   
            console.log(data);
            this.ngOnInit();
          },
          err=>{console.log(err)}
        );
      }
    }
}
