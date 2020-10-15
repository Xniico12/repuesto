import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//component
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component'
import {MaterialComponent} from './material.component'
//module
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from '././forms/register/register.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { MapComponent } from './components/map/map.component';
import { RegisterDocComponent } from './forms/register-doc/register-doc.component';
import { AuthorizationComponent } from './ordersAuth/authorization/authorization.component';
import { PatientComponent } from './pages/patient/patient.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import {CdkTableModule} from '@angular/cdk/table';
import {OrdersComponent} from './ordersAuth/orders/orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthComponent } from './pages/doctor/auth/auth.component';
import { MedicalrecordComponent } from './pages/doctor/medicalrecord/medicalrecord.component';
import { AppointComponent } from './pages/doctor/appoint/appoint.component'
import { LoginComponent } from './forms/login/login.component';
import { FamilyComponent } from './components/family/family.component';
import { MedicalRComponent } from './components/medical-r/medical-r.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    MapComponent,
    RegisterDocComponent,
    AuthorizationComponent,
    PatientComponent,
    DoctorComponent,
    OrdersComponent,
    AuthComponent,
    MedicalrecordComponent,
    AppointComponent,
    LoginComponent,
    FamilyComponent,
    MedicalRComponent,
    DoctorsComponent,
    AppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponent,
    CdkTableModule,
    NgbModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
