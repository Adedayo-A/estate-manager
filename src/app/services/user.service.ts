import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser'
import { HttpClient } from '@angular/common/http';
import { Values } from '../value.config';
import { tokenGetter } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUser {
  Url: string;
  currToken: string;

  constructor(private http: HttpClient) {
    this.Url = Values.apiUrl;
    this.currToken = tokenGetter();
    console.log(this.currToken);
   }
  postUser(model: any) {
    return this.http.post<any>(`${this.Url}api/GetEstate`, model);
  }
  getUsers() {
    return this.http.get<any>(`${this.Url}api/GetEstate`);
  }
  getAUser() {
    return this.http.get<any>(`${this.Url}api/GetEstate`);
  }
}
