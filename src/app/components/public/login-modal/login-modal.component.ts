import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/shared/services/user-service.service';
import { User } from ".././../../shared/interfaces/userInterface";

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  loginForm: FormGroup;
  token:string = "";
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
      this.token = data.token;
      window.localStorage.setItem('token',this.token);
      this._router.navigate(['/admin']);
      },
      error=>{
        if(error.status == 403){
          alert('contraseña invalida')
        }else if (error.status == 404) {
          alert('email incorrecto')
        }
      }
    )
  }
  
}
