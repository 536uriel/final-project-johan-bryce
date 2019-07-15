import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateRentalCarsComponent } from './calculate-rental-cars.component';

describe('CalculateRentalCarsComponent', () => {
  let component: CalculateRentalCarsComponent;
  let fixture: ComponentFixture<CalculateRentalCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateRentalCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateRentalCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
