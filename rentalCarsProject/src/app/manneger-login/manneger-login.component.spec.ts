import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MannegerLoginComponent } from './manneger-login.component';

describe('MannegerLoginComponent', () => {
  let component: MannegerLoginComponent;
  let fixture: ComponentFixture<MannegerLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MannegerLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MannegerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
