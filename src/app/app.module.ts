import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './routs/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LandingEffectsService } from './redux/landing/landing-effects.service';
import { landingReducer } from './redux/landing/reducer';
import { ResaleWebsiteComponent } from './routs/resale-website/resale-website.component';
import { BuyWebsiteComponent } from './routs/buy-website/buy-website.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BuyWebsiteEffectsService } from './redux/buy-website/buy-website-effects.service';
import { buyWebsiteReducer } from './redux/buy-website/reducer';
import { OnboardComponent } from './routs/buy-website/onboard/onboard.component';
import { buyWebsiteOnboardReducer } from './redux/buy-website-onboard/reducer';
import { BuyWebsiteOnboardEffectsService } from './redux/buy-website-onboard/buy-website-onboard-effects.service';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ResaleWebsiteComponent,
    BuyWebsiteComponent,
    OnboardComponent
  ],
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      landingReducer: landingReducer,
      buyWebsiteReducer: buyWebsiteReducer,
      buyWebsiteOnboardReducer: buyWebsiteOnboardReducer
    }, {}),
    EffectsModule.forRoot([
      LandingEffectsService,
      BuyWebsiteEffectsService,
      BuyWebsiteOnboardEffectsService
    ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
