import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './routs/landing/landing.component'
import { ResaleWebsiteComponent } from './routs/resale-website/resale-website.component';
import { BuyWebsiteComponent } from './routs/buy-website/buy-website.component';
const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'resale-website', component: ResaleWebsiteComponent
  },
  {
    path: 'buy-website', component: BuyWebsiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
