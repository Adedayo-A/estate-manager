import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Values } from 'src/app/value.config';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserAccount {
    constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {
        this.Url = Values.apiUrl;
        // const headerSettings: { [name: string]: string | string[] } = {};
    }

    Url: string;
    header: any;

    public isAuthenticated(): boolean {   
      const token = localStorage.getItem('token');    // Check whether the token is expired and return
    // true or false
      return !this.jwtHelper.isTokenExpired(token);
    }

    login(model) {
      var userData = "username=" + model.username + "&password=" + model.password + "&grant_type=password";
      let headers = new HttpHeaders();
      // headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      // return this.http.post<any>(`${this.Url}token`, userData, { headers: headers })
      return this.http.post<any>(`${this.Url}api/auth/login`, model)
    }

    register(model: any) {
        console.log(`${this.Url}api/account/register`);
      return this.http.post<any>(`${this.Url}api/account/register`, model
      )
    }
}