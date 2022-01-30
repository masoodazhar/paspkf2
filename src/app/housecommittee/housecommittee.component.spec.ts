import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousecommitteeComponent } from './housecommittee.component';

describe('HousecommitteeComponent', () => {
  let component: HousecommitteeComponent;
  let fixture: ComponentFixture<HousecommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousecommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousecommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
