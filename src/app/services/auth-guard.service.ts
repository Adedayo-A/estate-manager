import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserAccount } from './userAccount.services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( public auth : UserAccount, public router : Router) { }

  canActivate () : boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
