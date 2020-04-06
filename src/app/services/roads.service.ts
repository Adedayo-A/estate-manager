import { Injectable } from '@angular/core';
import { Iroads } from '../interfaces/iroads';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Values } from '../value.config';
import { tokenGetter } from '../app.module';
import { EstateIdService } from '../estate-id.service'

@Injectable({
  providedIn: 'root'
})
export class RoadsService implements Iroads {

  estateId : number;
  estateName : string;
  currToken : string;
  Url : string;
  roadId: number;
  roadName: string;



  constructor(private http: HttpClient) { 
    this.Url = Values.apiUrl;
    this.currToken = tokenGetter();
    // console.log('id service', this.estateIdService.estateId);
  }

  roadList = [];

  getId() {
    console.log('estateId', this.estateId);
    return this.estateId;
  }

  setId(id, name) {
    console.log('our road id is', id);
    this.estateId = id;
    this.estateName = name;
    return;
  }

  setRoadId(id, name) {
    console.log('our road id is', id);
    this.roadId = id;
    this.roadName = name;
    return;
  }

  setRoadIdFromSelect(id) {
    this.roadId = id;
    return;
  }
  
  getRoads() {
    let header = new HttpHeaders().set(
      "Authorization",
       this.currToken
    );
    return this.http.get<any>(`${this.Url}api/estates/${this.estateId}/roads`, { headers: header} )
  }

  postRoad(model) {
    console.log('road Id', this.roadId);
    return this.http.post<any>(`${this.Url}api/estates/${this.estateId}/roads`, model )
  
  }
}
