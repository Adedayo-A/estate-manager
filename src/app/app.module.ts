import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  { NavComponent } from './component/nav/nav.component';
import  { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { RoadsComponent } from './component/roads/roads.component';
import { PaymentComponent } from './component/payment/payment.component';
import { UserComponent } from './component/user/user.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    RoadsComponent,
    PaymentComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:3001", "localhost:5001","foo.com", "bar.com"],
        blacklistedRoutes: ["example.com/examplebadroute/"]
      }
    }),
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// RouterModule.forRoot([
//   { path: 'register', component: RegisterComponent },
//   { path: 'road', component: RoadsComponent },
//   { path: 'payment', component: PaymentComponent },
//   { path: 'user', component: UserComponent },
//   { path: 'home', component: HomeComponent },
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: '**', component: LoginComponent }
// ])
