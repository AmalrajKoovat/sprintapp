import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { SprintcalculatorComponent } from './component/sprintcalculator/sprintcalculator.component';


export const routes: Routes = [
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'sprintcalc',
    component:SprintcalculatorComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
