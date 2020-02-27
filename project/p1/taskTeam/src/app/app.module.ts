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
import { EntryComponent } from './home-page/log-in/entry/entry/entry.component';


const appRoute: Routes = [
  {path: '' , component: HomePageComponent},
  {path: 'login', component: LogInComponent },
  {path: 'login/entry', component: EntryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    LogInComponent,
    SignUpComponent,
    EntryComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
