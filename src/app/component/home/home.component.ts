import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { faHamburger, faHome, faRoad, faMoneyBill, faUser, faSignOutAlt,faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faHamburger = faHamburger;
  faHome = faHome;
  faRoad = faRoad;
  faMoneyBill = faMoneyBill;
  faUser = faUser;
  faSignOut = faSignOutAlt;
  faPowerOff = faPowerOff;
  activeIcon: number;
  activeComponent: number;


  constructor() { }

  ngOnInit(): void {
  }

  activeIconState() {

  }

}
