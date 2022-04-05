import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { StoreService } from '../services/data/store.service';
export class Item{
  title: string = ''
  description: string = '';
  constructor(
    userId : number,
    id : number,
    title : string,
    description : string

  ){}
}

@Component({
  selector: 'app-datapage',
  templateUrl: './datapage.component.html',
  styleUrls: ['./datapage.component.css']
})
export class DatapageComponent implements OnInit {

  constructor(private data : DataService, private store:StoreService) { }

  title = sessionStorage.getItem('title')
  description = sessionStorage.getItem('description')

  ngOnInit(): void {   
  }

}
