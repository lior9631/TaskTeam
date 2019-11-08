import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperOpenPageComponent } from './upper-open-page.component';

describe('UpperOpenPageComponent', () => {
  let component: UpperOpenPageComponent;
  let fixture: ComponentFixture<UpperOpenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperOpenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperOpenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
