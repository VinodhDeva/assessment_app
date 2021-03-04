import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Appointmentlist } from '../appointmentlist'

@Injectable()
export class AppointmentService {
  private applist:Appointmentlist;
  private baseUri: string = "http://localhost:8080/api";
  private headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(private http: HttpClient) { }

  createCountry(applist: Appointmentlist)
  {
    return this.http.post(this.baseUri+'/create', applist,{headers:this.headers});
  }

  getAppointmentList()
  {
    return this.http.get(this.baseUri+'/appointmentlist',{headers:this.headers});
  }

  getAppointmentListdate()
  {
    return this.http.get(this.baseUri+'/appointmentlist/2021/03/05',{headers:this.headers});
  }

  updateCountry(applist: Appointmentlist)
  {
    return this.http.put(this.baseUri+'/update', applist,{headers:this.headers});
  }

  deleteCountries(id:string)
  {
    return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers});
  }

  setter(applist:Appointmentlist)
  {
    this.applist = applist;
  }

  getter()
  {
    return this.applist;
  }

}
