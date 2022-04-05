import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router :Router, public auth :AuthenticationServiceService) { }
  isUserLoggedIn = false

  ngOnInit() {}
  navigateLogin(){
    this.router.navigate(['login'])
  }
  navigateUser(){
    this.router.navigate(['details'])
    
  }
  navigateLogOff(){
    this.router.navigate(['logout'])
  }

}
