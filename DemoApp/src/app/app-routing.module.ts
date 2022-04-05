import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatapageComponent } from './datapage/datapage.component';
import { DetailsComponent } from './details/details.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoffComponent } from './logoff/logoff.component';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  {path :"" , component: LoginComponent},
  {path :"login" , component: LoginComponent},
  {path :"details" , component: DetailsComponent, canActivate :[RouteGuardService]},
  {path :"dataPage" , component: DatapageComponent, canActivate :[RouteGuardService]},
  {path :"logout" , component: LogoffComponent, canActivate :[RouteGuardService]},
  {path :"**" , component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
