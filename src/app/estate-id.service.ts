import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstateIdService {

  constructor() { }

  estateId: number;

  getId() {
    console.log('estateId', this.estateId);
    return this.estateId;
  }

  setId(id) {
    console.log('our estate id is', id);
    return this.estateId = id;
  }
}
