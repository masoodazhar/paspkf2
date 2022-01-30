import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessadvisorycommitteeComponent } from './businessadvisorycommittee.component';

describe('BusinessadvisorycommitteeComponent', () => {
  let component: BusinessadvisorycommitteeComponent;
  let fixture: ComponentFixture<BusinessadvisorycommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessadvisorycommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessadvisorycommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
