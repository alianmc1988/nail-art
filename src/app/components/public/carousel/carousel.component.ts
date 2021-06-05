import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  picprefix = "../../../../assets/pics/caroussel/";
  pictures = [this.picprefix + "01.jpg",this.picprefix + "02.jpg", this.picprefix + "03.jpg",this.picprefix + "04.jpg",this.picprefix + "05.jpg"]
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
