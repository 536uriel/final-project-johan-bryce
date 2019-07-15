import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsToRentComponent } from './cars-to-rent.component';

describe('CarsToRentComponent', () => {
  let component: CarsToRentComponent;
  let fixture: ComponentFixture<CarsToRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsToRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsToRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
