import { Component, OnInit, Input } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHouseUser, faUser, faCashRegister, faPowerOff, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormComponent } from '../form/form.component';
import { GeneralService } from "../../services/general.service";
import decode from 'jwt-decode';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  faSearch = faSearch;
  faHouseUser = faHouseUser;
  faUser = faUser;
  faPlus = faPlus;
  faCashReg = faCashRegister;
  faPowerOff = faPowerOff;
  role: string;
  vee: boolean;

  constructor( public dialog : MatDialog, private generalService: GeneralService) { }
  ngOnInit(): void {
    this.getRole();
  }

  openComponent() {
    return this.generalService.setOpened(1);
  }

  getVee() {
    console.log(this.vee, 'v');
    return this.vee;
  }

  openDialog(): void {
    this.generalService.blur = true;
    let dialogRef = this.dialog.open(FormComponent, {
      width: '500px',
      height: '500px',
      data: {},
      backdropClass: 'backdropBackground',
    });
    dialogRef.afterClosed().subscribe(result => {
    this.generalService.blur = false;
    });
  }

  public get hideBlur(): boolean {
    return this.generalService.blur;
  }

  public set hideBlur(value: boolean) {
    this.generalService.blur = value;
  }


  getRole() {
    const token = localStorage.getItem('token');
    const tokenPayload = decode(token);
    this.role = tokenPayload.role
    console.log("role is", this.role);
  }

}
