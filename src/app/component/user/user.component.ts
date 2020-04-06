import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { faEye, faPlus, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import decode from 'jwt-decode';
import { UserService } from '../../services/user.service'
import { UserAccount } from 'src/app/services/userAccount.services';

export interface CurrentUsers {
  fname: string;
  lname: string;
  id: number;
  type: string;
  phone: string;
}

const ELEMENT_DATA: CurrentUsers[] = [
  {id: 1, fname: 'Fredrick', lname: 'John', type: "Supervisor", phone: '08123589642'},
  {id: 2, fname: 'Lanre', lname: 'Olufemi', type: "Security", phone: '08153789642'},
  {id: 3, fname: 'Godwin', lname: 'Felix', type: "Supervisor", phone: '081029589642'},
  {id: 4, fname: 'Benson', lname: 'Mark', type: "Security", phone: '08143589642'},
  {id: 5, fname: 'Gbenga', lname: 'Adeseun', type: "Supervisor", phone: '081783589642'},
  {id: 6, fname: 'Kola', lname: 'Banjo', type: "Security", phone: '081567'},
  {id: 7, fname: 'Bukola', lname: 'Matthews', type: "Secretary", phone: '08023589642'},
  {id: 8, fname: 'James', lname: 'John', type: "Security", phone: '08073589642'},
  {id: 9, fname: 'Niyi', lname: 'Bolutife', type: "Secretary", phone: '08033489642'},
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  role: any;
  allUsers: any;

  constructor(private repo : UserService, public auth : UserAccount) { }

  ngOnInit(): void {
    this.getRole();
    this.getActionAdmin();
    this.getActionSupervisor();
    this.getActionOrdinaryUser();
    this.getUsers();
  }

  faEye = faEye;
  faPlus = faPlus;
  fapeople = faPeopleArrows;
  popUp: boolean = false;
  addUser: boolean = false;
  viewTable: boolean = false;
  actionAdmin: any = [];
  actionSupervisor: any = [];
  actionHomeOwner: any = [];
  actionHouseServices: any = [];
  actionOccupant: any = [];
  currPop: number;
  addUserForm: boolean = false;
  viewUserTable: boolean = false;
  supervisorForm: boolean;



  getUsers() {
    this.repo.getUsers().subscribe(
      data => {
        console.log(data);
        this.allUsers = data;
        // this.dataSource = data;
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

  getActionAdmin() {
    if(this.role === "Administrator") {
      this.actionAdmin.push("View");
      this.actionSupervisor.push("View");
      this.actionSupervisor.push("Add");
      this.actionHomeOwner.push("View");
      this.actionHomeOwner.push("Add");
      this.actionOccupant.push("View");
      this.actionOccupant.push("Add");
      this.actionHouseServices.push("View");
      this.actionHouseServices.push("Add");
      return;
    }
  }


  getActionSupervisor() {
    if(this.role === "Supervisor") {
      this.actionAdmin.push("View");
      this.actionSupervisor.push("View");
      this.actionHomeOwner.push("View");
      this.actionHomeOwner.push("Add");
      this.actionHouseServices.push("View");
      this.actionHouseServices.push("Add");
      this.actionOccupant.push("View");
      this.actionOccupant.push("Add");
      return;
    }
  }

  getActionOrdinaryUser() {
    if(this.role === "User") {
      this.actionSupervisor.push("View");
      this.actionAdmin.push("View");
      this.actionHomeOwner.push("View");
      this.actionOccupant.push("View");
      this.actionHouseServices.push("View");
      return;
    }
  }

  getaction (param : string) {
    if (param === 'view') {
      return 
    }
  }

  viewT() {
    this.addUser = false;
    if (this.viewTable === false) {
      this.viewTable = true;
    } else {
      this.viewTable = false;
    }
  }
  
  pop() {
    this.addUser = false;
    this.viewTable = false;

    if(this.popUp === false) {
      this.popUp = true;
    } else {
      this.popUp = false;
    }
  }

  addAUser() {
    this.viewTable = false;
    if(this.addUser === false) {
      this.addUser = true;
    } else {
      this.addUser = false;
    }
  }

  displayedColumns: string[] = ['fname'];
  dataSource = ELEMENT_DATA;


}
