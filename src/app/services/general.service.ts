import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralService implements OnInit {

  constructor() { }
  blur = false;
  openedNo: number = 1;

  setOpened(openNo) {
    this.openedNo = openNo;
    console.log('open see', this.openedNo);
    return this.openedNo;
  }

  getOpened() {
    return this.openedNo;
  }

  ngOnInit(): void {
  }
}
