 import { Component, OnInit } from '@angular/core';
import { faHamburger, faHome, faRoad, faMoneyBill, faUser, faSignOutAlt, faPowerOff, faPlus } from '@fortawesome/free-solid-svg-icons';
import { RoadsService } from '../../services/roads.service';
import { HomesService } from '../../services/homes.service';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { MatDialog } from '@angular/material/dialog';
import { FormroadComponent } from '../formroad/formroad.component';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  roadList: any;
  role: any;

  constructor(private repo : RoadsService, private homerepo : HomesService, private router: Router, public dialog : MatDialog) { }

  ngOnInit(): void {
    this.getRoads();
  }

  faUser = faUser;
  faPlus = faPlus;
  estateName: string;

  navigate(id, name) {
    console.log('road Id', id);
    this.repo.setRoadId(id, name)
    this.router.navigate(['/homes']);
  }

  openDialog(): void {
    // const filterData = {
    //   top : this.filterIcon.nativeElement.getBoundingClientRect().top,
    //   left : this.filterIcon.nativeElement.getBoundingClientRect().left
    // };
    console.log("we are here");
    let dialogRef = this.dialog.open(FormroadComponent, {
      width: '500px',
      height: '500px',
      data: {}
    });
  }

  getRoads() {
    // this.model.grant_type = "password";
    this.estateName = this.repo.estateName;
    this.repo.getRoads().subscribe(
      data => {
        console.log('our road data is ', data);
        this.repo.roadList = data;
        this.roadList = this.repo.roadList;
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

  getRole() {
    const token = localStorage.getItem('token');
    const tokenPayload = decode(token);
    this.role = tokenPayload.role
    console.log("role is", this.role);
  }

}
