import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _formBuilder:FormBuilder, private _router:Router) {
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.compose([Validators.email,Validators.required])],
      password:['', Validators.compose([Validators.minLength(5), Validators.required])]
    })
  }

  ngOnInit(): void {
  }
  
  sendLogin(values:{}){
    console.log(values);
    this._router.navigateByUrl('/admin')
  }

}
