import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/shared/services/user-service.service';
import { User } from ".././../../shared/interfaces/userInterface";
import {map} from 'rxjs/operators'
import { LoginResponse } from 'src/app/shared/interfaces/responseLoginInterface';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _formBuilder:FormBuilder, private _router:Router, private _userService:UserServiceService) {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.compose([Validators.email,Validators.required])],
      password:['', Validators.compose([Validators.minLength(5), Validators.required])]
    });
    
    
  }

  ngOnInit(): void {
  }
  
  sendLogin(){
    if(!this.loginForm.valid){
      console.log('formulario llenado incorrectamente');
      this.loginForm.reset();
      return;
    }
    const data:User = this.loginForm.value;
    this._userService.login(data).subscribe(
      data=>{
      console.log('Successful', data); 
      this._router.navigate(['/admin']);
      },
      error=>console.error(error)
    )
  }
  
}
