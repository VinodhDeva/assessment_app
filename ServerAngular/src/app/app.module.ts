import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppointmentlistComponent } from './components/appointmentlist/appointmentlist.component';
import { AppointmentService } from './shared/appointment.service';
import {BsDatepickerModule } from 'ngx-bootstrap/datepicker'

const appRoutes:Routes = [
  {path: '', component:AppointmentlistComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AppointmentlistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
