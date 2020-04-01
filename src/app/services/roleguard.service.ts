import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { UserAccount } from './userAccount.services';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleguardService {

  constructor(public auth : UserAccount, public router : Router) { }
  // canActivate(route: ActivatedRouteSnapshot): boolean { 
  //   // on the data property
  //   const administrator = route.data.administrator;
  //   const token = localStorage.getItem('token');
  //   const tokenPayload = decode(token);
  //   if (
  //     !this.auth.isAuthenticated() || 
  //     tokenPayload.role !== administrator
  //   ) {
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  //   return true;
  // }
}
