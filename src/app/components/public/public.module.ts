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
import { ListServComponent } from './services/list-serv/list-serv.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import{AdminRoutingModule} from '../admin/admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    PresentationComponent,
    ServicesComponent,
    AboutComponent,
    ListServComponent,
    LoginModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    PublicRoutingModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[],
  
  exports:[MainComponent]
})
export class PublicModule { }
