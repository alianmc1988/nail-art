import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../admin/admin-dashboard/admin-dashboard.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'login',
    component:LoginModalComponent
  },
  
  {
    path:"admin",
    component:AdminDashboardComponent
  }
  
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
