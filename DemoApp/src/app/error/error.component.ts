import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = "A Technical Error have Occured. Try after some time"

  constructor() { }

  ngOnInit(): void {
  }

}
