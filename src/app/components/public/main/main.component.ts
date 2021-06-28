import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  show:boolean = false;
  logged:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  logincatch(e:boolean){
    this.show = e;
  }
  
  
}
