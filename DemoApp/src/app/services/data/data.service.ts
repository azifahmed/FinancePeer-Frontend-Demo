import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from 'src/app/datapage/datapage.component';
import { User } from 'src/app/details/details.component';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http :HttpClient) { }
  fetchData(user: User){
    // console.log("abcd")
    return this.http.post<Item>(`http://localhost:8080/getValue`,user);
  }
}
