import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'taskTeam';

  constructor(private elementRef: ElementRef ) {

  }
  ngAfterViewInit() {
 }
}
