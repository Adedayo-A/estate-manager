import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAccount } from '../../services/userAccount.services';
import { Values } from '../../value.config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  constructor(
    private router: Router,
    // tslint:disable-next-line: no-shadowed-variable
    private UserAccount: UserAccount,
  ) { }

  ngOnInit(): void {
  }

  register() {
  this.UserAccount.register(this.model).subscribe(
    data => {
      console.log(data);
      if (data.success === true) {
        this.router.navigate(['/home']);
        localStorage.setItem('providerId', data.provider.providerId);
        localStorage.setItem('providerKey', data.provider.providerKey);
        localStorage.setItem('providerName', data.provider.name);
      }
    })
  }

}
