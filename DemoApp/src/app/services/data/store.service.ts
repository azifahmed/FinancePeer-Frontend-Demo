import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }
  storeData(title: string,description: string){
      sessionStorage.setItem('title', title)
      sessionStorage.setItem('description', description)
  }
  getTitle(){
    return sessionStorage.getItem('title')
  }
  getBody(){
    return sessionStorage.getItem('description')
  }
}
