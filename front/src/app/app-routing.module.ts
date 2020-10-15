import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PatientComponent } from './pages/patient/patient.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { LoginComponent } from './forms/login/login.component';
import { RegisterDocComponent } from './forms/register-doc/register-doc.component';

const routes: Routes = [
  {path: '' ,component: HomeComponent  },
  {path: 'patient', component: PatientComponent },
  {path: 'doctor', component: DoctorComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterDocComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
