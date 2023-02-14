import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate{

  constructor(private authGuard: AuthGuardService) { }

  canActivate(): boolean {
    return this.authGuard.isLoggedIn;
  }
}
