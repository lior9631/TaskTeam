import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpperOpenPageComponent } from './upper-open-page/upper-open-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperOpenPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
