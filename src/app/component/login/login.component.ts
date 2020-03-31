import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccount } from '../../services/userAccount.services';
import { Values } from '../../value.config';
import { faRunning, faHouseUser} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  farunning = faRunning;
  fahouse = faHouseUser;
  model: any = {};
  header: any;
  isNotBusy: boolean;
  constructor(
    // tslint:disable-next-line: no-shadowed-variable
    private router: Router,
    private UserAccount: UserAccount,
  ) { 
  }


  ngOnInit(): void {
  }

  login() {
    // this.model.grant_type = "password";
    console.log(this.model);
    this.UserAccount.login(this.model).subscribe(
      data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/home']);
        }
        setTimeout(() => {
          this.isNotBusy = true;
        }, 1000);
      }, 
      error => {
        console.log(error);
        setTimeout(() => {
          this.isNotBusy = true;
        }, 1000);
      }
    )
  }

}
