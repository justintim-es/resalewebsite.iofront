import { NgModule } from '@angular/core';
import { MainComponent } from './routs/main/main.component';
import { LoginComponent } from './routs/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './routs/landing/landing.component'
import { ResaleWebsiteComponent } from './routs/resale-website/resale-website.component';
import { BuyWebsiteComponent } from './routs/buy-website/buy-website.component';
import { OnboardComponent } from './routs/buy-website/onboard/onboard.component';
const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'resale-website', component: ResaleWebsiteComponent
  },
  {
    path: 'buy-website', component: BuyWebsiteComponent
  },
  {
    path: 'buy-website/:id', component: BuyWebsiteComponent
  },
  {
    path: 'buy-website-onboard/:id', component: OnboardComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'main', component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
