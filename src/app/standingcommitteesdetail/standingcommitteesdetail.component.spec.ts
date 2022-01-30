import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingcommitteesdetailComponent } from './standingcommitteesdetail.component';

describe('StandingcommitteesdetailComponent', () => {
  let component: StandingcommitteesdetailComponent;
  let fixture: ComponentFixture<StandingcommitteesdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingcommitteesdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingcommitteesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
