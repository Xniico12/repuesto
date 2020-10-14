import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//component
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component'
import { OrdersAutorizationComponent } from './components/orders-autorization/orders-autorization.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import {MaterialComponent} from './material.component'
//module
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AppointmentComponent,
    OrdersAutorizationComponent,
    NavbarComponent,
    FooterComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
