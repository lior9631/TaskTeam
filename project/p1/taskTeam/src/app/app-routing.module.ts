
import { NgModule,} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


const appRoute: Routes = [
  {path: '' , component: HomePageComponent}
];

@NgModule({
  imports : [
    RouterModule.forRoot(appRoute)

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
