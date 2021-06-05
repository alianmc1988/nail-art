import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {PublicModule} from  './components/public/public.module';
import {PublicRoutingModule} from './components/public/public-routing.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PublicModule,
    PublicRoutingModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
