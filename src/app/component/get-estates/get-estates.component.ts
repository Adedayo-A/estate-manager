import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {MatDialogModule} from '@angular/material/dialog';
import { faHamburger, faHome, faRoad, faMoneyBill, faUser, faSignOutAlt,faPowerOff, faPlus } from '@fortawesome/free-solid-svg-icons';
import { EstateService } from '../../services/estate.service';
import { RoadsService } from '../../services/roads.service';
import { UserAccount } from '../../services/userAccount.services'
import { IEstate} from '../../interfaces/iestate';
import  { tokenGetter } from '../../app.module'
import decode from 'jwt-decode';
import { FormComponent } from 'src/app/component/form/form.component';
import { GeneralService } from "../../services/general.service";
import { Iestatedata } from '../../interfaces/iestatedata';
import { Router } from '@angular/router';
import {EstateIdService } from '../../estate-id.service'

@Component({
  selector: 'app-get-estates',
  templateUrl: './get-estates.component.html',
  styleUrls: ['./get-estates.component.css']
})
export class GetEstatesComponent implements OnInit {
  @ViewChild('filterIcon') filterIcon: ElementRef;

  faHamburger = faHamburger;
  faHome = faHome;
  faRoad = faRoad;
  faMoneyBill = faMoneyBill;
  faUser = faUser;
  faSignOut = faSignOutAlt;
  faPowerOff = faPowerOff;
  faPlus = faPlus;
  activeIcon: number;
  activeComponent: number;
  allEstates: any;
  role: any;
  name: any;
  location: any;
  imageUrl: any;
  post: boolean = false;
  model: any = {};
  blur: boolean = false;
  // itemList: any;
  itemList: Iestatedata[];
  clickedEstateId: number;


  constructor(private repo : EstateService, public auth : UserAccount, public dialog : MatDialog,
    private generalService: GeneralService, private router: Router,
    private idrepo: EstateIdService,  private roadrepo : RoadsService) { 

    }

  ngOnInit(): void {
    this.getEstates();
  }

  navigate(id, name) {
    console.log('estate Id', id);
    this.roadrepo.setId(id, name)
    this.router.navigate(['/anestate']);
  }

  public get hideBlur(): boolean {
    return this.generalService.blur;
  }

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
    getRole() {
      const token = localStorage.getItem('token');
      const tokenPayload = decode(token);
      this.role = tokenPayload.role
      console.log("role is", this.role);
    }

    showPost() {
      if (this.post === false) {
        this.post = true;
      } else {
        this.post = false;
      }
    }
    

  getEstates() {
    // this.model.grant_type = "password";
    this.repo.getEstates().subscribe(
      data => {
        console.log(data);
        this.repo.itemList = data;
        this.itemList = data;
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

  postEstate() {
    console.log('here');

    // this.model.grant_type = "password";
    this.repo.postEstate(this.model).subscribe(
      data => {
        console.log(data);
        this.itemList = [...this.allEstates,data];
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
