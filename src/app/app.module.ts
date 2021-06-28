import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { LoginModalComponent } from './components/public/login-modal/login-modal.component';
import { FooterComponent } from './components/public/main/footer/footer.component';
import { HeaderComponent } from './components/public/main/header/header.component';
import { MainComponent } from './components/public/main/main.component';
import { PresentationComponent } from './components/public/presentation/presentation.component';
import { CarouselComponent } from './components/public/carousel/carousel.component';
import { ServicesComponent } from './components/public/services/services.component';
import { AboutComponent } from './components/public/about/about.component';
import { ListServComponent } from './components/public/services/list-serv/list-serv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministratorModule } from './components/administrator/administrator.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginModalComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    PresentationComponent,
    CarouselComponent,
    ServicesComponent,
    AboutComponent,
    ListServComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //NgbModule,
    //AlifeFileToBase64Module,
    FormsModule,
    ReactiveFormsModule,
    AdministratorModule,
    FontAwesomeModule
    
  ],
  providers: [],
  exports:[MainComponent],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
