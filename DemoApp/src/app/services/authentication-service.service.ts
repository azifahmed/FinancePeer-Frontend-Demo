import { ɵparseCookieValue } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor() { }
  authenticate(username: string,password: string){
    if (username==='admin' && password === 'admin'){
      sessionStorage.setItem('authUser', username)
      return true    
    }
    else{
      return false
    }
  }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authUser')
    return !(user === null)
  }
  logOut(){
    sessionStorage.removeItem('authUser')
  }
}
