import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousedebatesComponent } from './housedebates.component';

describe('HousedebatesComponent', () => {
  let component: HousedebatesComponent;
  let fixture: ComponentFixture<HousedebatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousedebatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousedebatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
