import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MannegerPageComponent } from './manneger-page.component';

describe('MannegerPageComponent', () => {
  let component: MannegerPageComponent;
  let fixture: ComponentFixture<MannegerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MannegerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MannegerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
