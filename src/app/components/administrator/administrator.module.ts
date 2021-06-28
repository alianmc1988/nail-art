import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { RouterModule } from '@angular/router';
import { AdminServicesComponent } from './admin-services/admin-services.component';
import { AddServiceComponent } from './admin-services/add-service/add-service.component';
import { AddServiceFormComponent } from './admin-services/add-service/add-service-form/add-service-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    AdminNavComponent,
    AdminServicesComponent,
    AddServiceComponent,
    AddServiceFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[DashboardComponent]
})
export class AdministratorModule { }
