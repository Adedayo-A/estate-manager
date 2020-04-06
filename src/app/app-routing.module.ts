import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { 
  RoleguardService as RoleGuard 
} from './services/roleguard.service';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { RoadsComponent } from './component/roads/roads.component';
import { PaymentComponent } from './component/payment/payment.component';
import { UserComponent } from './component/user/user.component';
import  { NavComponent } from './component/nav/nav.component';
import  { HomeComponent } from './component/home/home.component';
import  { HomesComponent } from './component/homes/homes.component';
import  { TreeComponent } from './component/tree/tree.component';
import  { MattreeComponent } from './component/mattree/mattree.component';
import  { GetEstatesComponent } from './component/get-estates/get-estates.component';
import  { FormComponent } from './component/form/form.component';
import  { FormroadComponent } from './component/formroad/formroad.component';



const routes: Routes = [
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'homes', component: HomesComponent, canActivate: [AuthGuard] },
  { path: 'road', component: RoadsComponent },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'tree', component: TreeComponent },
  { path: 'mattree', component: MattreeComponent },
  { path: 'getusers', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'anestate', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'getestates', component: GetEstatesComponent, canActivate: [AuthGuard] },
  { path: 'estateform', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'roadform', component: FormroadComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
