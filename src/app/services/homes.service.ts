import { Injectable } from '@angular/core';
import { Ihomes } from '../interfaces/ihomes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Values } from '../value.config';
import { tokenGetter } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class HomesService implements Ihomes {

  Url: string;
  currToken : string;
  roadId: number;
  roadName: string;

  constructor(private http: HttpClient) { 
    this.Url = Values.apiUrl;
    this.currToken = tokenGetter();
  }

  setId(id, name) {
    console.log('our estate id is', id);
    this.roadId = id;
    this.roadName = name;
    return;
  }

  getHomes() {
    let header = new HttpHeaders().set(
      "Authorization",
       this.currToken
    );
    return this.http.get<any>(`${this.Url}api/estates/${this.roadId}/homes`, { headers: header} )

  }
}
