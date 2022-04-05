import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit {

  constructor(public auth : AuthenticationServiceService) { }

  ngOnInit(): void {
    this.auth.logOut()
  }

}
