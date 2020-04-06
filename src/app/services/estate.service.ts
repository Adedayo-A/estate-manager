import { Injectable } from '@angular/core';
import { tokenGetter } from '../app.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Values } from 'src/app/value.config';
import { IEstate } from '../interfaces/iestate';

import { Observable, of } from 'rxjs';
import { Iestatedata } from '../interfaces/iestatedata';

interface CurrentUsers {
  fname: string;
  lname: string;
  id: number;
  type: string;
  phone: string;
}


@Injectable({
  providedIn: 'root'
})
export class EstateService implements IEstate {

  constructor(private http: HttpClient) { 
    this.Url = Values.apiUrl;
    this.currToken = tokenGetter();
    console.log(this.currToken);
  }

  itemList: Iestatedata[];

  getList() {
    console.log('item list', this.itemList);
    return this.itemList;
  }

  setList(itemlist) {
    this.itemList.push(itemlist);
    console.log('itemList', this.itemList);
  }

  postEstate(model) {
    return this.http.post<any>(`${this.Url}api/estates`, model )
  }
  
  getEstate(): any {
    return this.http.get<any>(`${this.Url}api/estate/`);
  }
  currToken : string;
  Url : string;

  getEstates(): any {
    let header = new HttpHeaders().set(
      "Authorization",
       this.currToken
    );
    return this.http.get<any>(`${this.Url}api/estates`, { headers: header} )
  }
}
