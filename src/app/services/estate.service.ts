import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Values } from 'src/app/value.config';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstateService {

  constructor(private http: HttpClient) { 
    this.Url = Values.apiUrl;
  }

  Url : string;

  getEstates() {
    return this.http.get<any>(`${this.Url}api/estates`)
  }
}
