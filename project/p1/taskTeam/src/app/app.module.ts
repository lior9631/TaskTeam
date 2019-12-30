import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './home-page/nav-bar/nav-bar.component';
import { LogInComponent } from './home-page/log-in/log-in.component';
import { SignUpComponent } from './home-page/sign-up/sign-up.component';


const appRoute: Routes = [
  {path: '' , component: HomePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    LogInComponent,
    SignUpComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
