import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  clickMessage = '';
  constructor(private router:Router) { }
  
  ngOnInit() {
    this.clickMessage = new Date('MM-DD-YYYY').toString();
  }
  
  newCountry(event:any)
  {
    event.preventDefault();
    this.router.navigate(['/createUpdate']);
  }
}
