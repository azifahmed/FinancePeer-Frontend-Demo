import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../datapage/datapage.component';
import { DataService } from '../services/data/data.service';
import { StoreService } from '../services/data/store.service';
export class User{
  constructor(
    userId : number,
    id : number

  ){}
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  abc =false
  user = {
    "userId": '',
    "id": ''
  }
  title:string=''
  description:string=''


  constructor(private router : Router ,private data :DataService,private store:StoreService) { }

  ngOnInit(): void {
  }

  getData(){
    this.abc =true
    this.data.fetchData(this.user).subscribe(
      response =>this.handleResponse(response)
    );
    this.router.navigate(['dataPage'])

  }
  handleResponse(response: Item){
    console.log(response)
    this.title = response.title
    this.description = response.description
    this.store.storeData(this.title,this.description)
  }

}

