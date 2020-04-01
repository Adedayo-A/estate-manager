import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser, faUser, faCashRegister, faPowerOff } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  faSearch = faSearch;
  faHouseUser = faHouseUser;
  faUser = faUser;
  faCashReg = faCashRegister;
  faPowerOff = faPowerOff;
  constructor() { }
  ngOnInit(): void {
  }

}
