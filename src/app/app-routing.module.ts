import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DistrictMainComponent } from './pages/district-main/district-main.component';
import { DistrictComponent } from './pages/district/district.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path:"",component:HomePageComponent
  },
  {
    path:"home",component:HomePageComponent
  },
  {
    path:"district",component:DistrictComponent
  },
  {
    path:"contact-us",component:ContactUsComponent
  },
  {
    path:"Login",component:LoginComponent
  },
  {
    path:"sign-up",component:SignUpComponent
  },
  {
    path:"district-info",component:DistrictMainComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
