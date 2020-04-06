import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTreeModule, MatTreeNestedDataSource} from '@angular/material/tree';
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
import { FormComponent } from './component/form/form.component';
import { HomesComponent } from './component/homes/homes.component';
import { FormroadComponent } from './component/formroad/formroad.component';
import { TreeComponent } from './component/tree/tree.component';
import { MattreeComponent } from './component/mattree/mattree.component';
import { GetEstatesComponent } from './component/get-estates/get-estates.component';
import { RoadFormComponent } from './component/road-form/road-form.component';

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
    FormComponent,
    HomesComponent,
    FormroadComponent,
    TreeComponent,
    MattreeComponent,
    GetEstatesComponent,
    RoadFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatCardModule,
    MatTreeModule,
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
  entryComponents: [
    HomeComponent,
    FormComponent
  ],
  providers: [
    
  ],
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
