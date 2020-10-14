import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrdersAutorizationComponent } from './components/orders-autorization/orders-autorization.component';
import { AppointmentComponent } from './components/appointment/appointment.component';

const routes: Routes = [
  {path: '' ,component: HomeComponent  },
  {path: 'login', component: LoginComponent},
  {path: 'orders', component: OrdersAutorizationComponent},
  {path: 'appointment', component: AppointmentComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
