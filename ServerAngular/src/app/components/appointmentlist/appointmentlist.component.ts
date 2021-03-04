import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { AppointmentService } from '../../shared/appointment.service';
import { Appointmentlist } from '../../appointmentlist';


@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrls: ['./appointmentlist.component.css']
})
export class AppointmentlistComponent implements OnInit {

  applists: Appointmentlist[];


  constructor(private _applistService: AppointmentService ) { }

  ngOnInit() {
    this.readappointments();
  }
  readappointments() {
    this._applistService.getAppointmentList().subscribe(
      data=>{
        console.log(data);
        this.applists = data['msg'];
      },
      error=>{
        console.log(error);
      }
    )
  }

}
