import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/administrator/dashboard/dashboard.component';
import { MainComponent } from './components/public/main/main.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:"",
    pathMatch:'full',
    redirectTo:'main'
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'admin',
    component:DashboardComponent,
    canActivate:[AuthGuard]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
