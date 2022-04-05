import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'admin'
  password = 'admin'
  errorMessage = 'Invalid Credentials'
  isInvalid = false

  constructor(private router :Router, public auth : AuthenticationServiceService) { }


  ngOnInit(): void {
  }

  handleLogin(){
    if (this.auth.authenticate(this.username, this.password)){
      this.isInvalid = false
      this.router.navigate(['details'])
    }
    else{
      this.isInvalid =true
    }
  }

}
