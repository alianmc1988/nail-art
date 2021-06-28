import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginclick = false;
  token = window.localStorage.getItem('token')
  @Output() loginShow = new EventEmitter<boolean>();
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  
  loginlink(){
  
    this.loginclick = !this.loginclick;
    this.loginShow.emit(this.loginclick);
  }

    
  
}
