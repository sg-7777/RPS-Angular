import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  isLoggedIn: boolean = false;
  
  constructor() { }
}
