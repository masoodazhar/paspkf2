import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicaccountscommitteeComponent } from './publicaccountscommittee.component';

describe('PublicaccountscommitteeComponent', () => {
  let component: PublicaccountscommitteeComponent;
  let fixture: ComponentFixture<PublicaccountscommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicaccountscommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicaccountscommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
