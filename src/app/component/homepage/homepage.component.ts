import { Component, OnInit } from '@angular/core';
import { faHamburger, faHome, faRoad, faMoneyBill, faUser, faSignOutAlt,faPowerOff } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faUser = faUser;

}
