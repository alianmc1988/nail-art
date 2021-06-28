import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nail-art';
  show:boolean = false;
  
  logincatch(e:boolean){
    this.show = e;
  }
}
