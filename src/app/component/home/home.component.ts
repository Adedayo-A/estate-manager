import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { faHamburger, faHome, faRoad, faMoneyBill, faUser, faSignOutAlt,faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { EstateService } from '../../services/estate.service';
import { UserAccount } from '../../services/userAccount.services'
import { IEstate} from '../../interfaces/iestate';
import  { tokenGetter } from '../../app.module'
import decode from 'jwt-decode';


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
  allEstates: any;
  role: any;


  constructor( private repo : EstateService, public auth : UserAccount) { }

  ngOnInit(): void {
    this.getEstates();
    this.getRole();
  }

    getRole() {
      const token = localStorage.getItem('token');
      const tokenPayload = decode(token);
      this.role = tokenPayload.role
      console.log("role is", this.role);
    }
    

  getEstates() {
    // this.model.grant_type = "password";
    this.repo.getEstates().subscribe(
      data => {
        console.log(data);
        this.allEstates = data;
        setTimeout(() => {
        }, 1000)
      }, 
      error => {
        console.log(error);
        setTimeout(() => {
        }, 1000);
      }
    )
  }

  getEstate() {
    // this.model.grant_type = "password";
    this.repo.getEstate().subscribe(
      data => {
        console.log(data);
        setTimeout(() => {
        }, 1000)
      }, 
      error => {
        console.log(error);
        setTimeout(() => {
        }, 1000);
      }
    )
  }

}
