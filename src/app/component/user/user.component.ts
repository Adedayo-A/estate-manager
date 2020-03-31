import { Component, OnInit } from '@angular/core';
import { faEye, faPlus } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit(): void {
  }

  faEye = faEye;
  faPlus = faPlus;
  popUp: boolean = false;
  addUser: boolean = false;
  viewTable: boolean = false;

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

  displayedColumns: string[] = ['id', 'fname', 'lname', 'type', 'phone'];
  dataSource = ELEMENT_DATA;


}
