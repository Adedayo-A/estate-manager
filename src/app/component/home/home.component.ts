import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {MatDialogModule} from '@angular/material/dialog';
import { faHamburger, faHome, faRoad, faMoneyBill, 
  faUser, faSignOutAlt,faPowerOff, faPlus, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { EstateService } from '../../services/estate.service';
import { RoadsService } from '../../services/roads.service';
import { UserAccount } from '../../services/userAccount.services';
import { NavComponent } from '../nav/nav.component'
import { IEstate} from '../../interfaces/iestate';
import  { tokenGetter } from '../../app.module'
import decode from 'jwt-decode';
import { FormComponent } from 'src/app/component/form/form.component';
import { GeneralService } from "../../services/general.service";
import { Iestatedata } from '../../interfaces/iestatedata';
import { Router } from '@angular/router';
import {EstateIdService } from '../../estate-id.service'

interface NavNode {
  name: string;
  children?: NavNode[];
}

const TREE_DATA: NavNode[] = [
  {
    name: 'Lists',
    children: [
      {name: 'Estates'},
      {
        name: 'Users'
      },
    ]
  },
  {
    name: 'Create',
    children: [
      { name: 'Estate'},
      { name: 'Road'},
      { name: 'Home'},
      { name: 'User'},
      { name: 'HomeOwner'},
      { name: 'Occupant'},
      { name: 'Home Staff'},
    ]
  },
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(NavComponent) nav;

  faHamburger = faHamburger;
  faHome = faHome;
  faRoad = faRoad;
  faMoneyBill = faMoneyBill;
  faUser = faUser;
  faSignOut = faSignOutAlt;
  faPowerOff = faPowerOff;
  faPlus = faPlus;
  faRight = faChevronRight;
  faDown = faChevronDown;
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
  openedResult: number;
  vee: boolean;



  constructor( private repo : EstateService, public auth : UserAccount, public dialog : MatDialog,
    public generalService: GeneralService, private router: Router,
    private idrepo: EstateIdService,  private roadrepo : RoadsService
    ) {
    this.dataSource.data = TREE_DATA;
    this.openedResult = generalService.getOpened();
  }
  ngAfterViewInit(): void {
    this.vee = this.nav.getVee();
  }


  ngOnInit(): void {
    this.getEstates();
    this.getRole();
  }

  treeControl = new NestedTreeControl<NavNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<NavNode>();



  openComponent(nodeName) {
    console.log('node name is', nodeName);
    if(nodeName === 'Estates') {
      this.generalService.setOpened(1);
      this.openedResult = this.generalService.getOpened();
      return;
    } else if (nodeName === 'Users') {
      this.generalService.setOpened(2);
      this.openedResult = this.generalService.getOpened();
      return;
    }
    else if (nodeName === 'Estate') {
      this.generalService.setOpened(3);
      this.openedResult = this.generalService.getOpened();
      return;
    }
  }

  openDialog(): void {
    console.log("we are here");
    let dialogRef = this.dialog.open(FormComponent, {
      width: '500px',
      height: '500px',
      data: {}
    });
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
    hasChild = (_: number, node: NavNode) => !!node.children && node.children.length > 0;

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
          this.repo.itemList = data;
          this.itemList = this.repo.itemList;
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

    save() {
      this.repo.setList(this.itemList);
    }

}
