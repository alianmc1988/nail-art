import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PublicRoutingModule } from './public-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    PresentationComponent,
    ServicesComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    PublicRoutingModule
  ],
  exports:[MainComponent]
})
export class PublicModule { }
