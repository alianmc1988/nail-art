import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiciosService } from 'src/app/shared/services/servicios.service';
import { AdminServicesComponent } from "../../admin-services.component";
import { AddServiceComponent } from '../add-service.component';


@Component({
  selector: 'app-add-service-form',
  templateUrl: './add-service-form.component.html',
  styleUrls: ['./add-service-form.component.css']
})
export class AddServiceFormComponent implements OnInit {
  service_to_add:FormGroup;
  
  
  constructor(private _builder:FormBuilder, private _service:ServiciosService, private _router:Router) {
    this.service_to_add = this._builder.group({
      service_name:['',[Validators.required,Validators.maxLength(20)]],
      description:['',[Validators.required,Validators.maxLength(100)]],
      price:['',[Validators.required]] 
    })
  }

  ngOnInit(): void {
  }
  
  
  sendInfo(){
    if(this.service_to_add.valid){
      this._service.createService(this.service_to_add.value).subscribe(
        data=>{
          console.log (data)
          this.service_to_add.reset();
          this._router.navigate(['/admin'])
          },
        err=> {console.log (err)}
      )
    }else{
      alert('debe rellenar correctamente los campos')
    }
  }
}
