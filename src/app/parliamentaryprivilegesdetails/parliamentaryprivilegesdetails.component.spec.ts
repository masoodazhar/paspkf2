import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParliamentaryprivilegesdetailsComponent } from './parliamentaryprivilegesdetails.component';

describe('ParliamentaryprivilegesdetailsComponent', () => {
  let component: ParliamentaryprivilegesdetailsComponent;
  let fixture: ComponentFixture<ParliamentaryprivilegesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParliamentaryprivilegesdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentaryprivilegesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
