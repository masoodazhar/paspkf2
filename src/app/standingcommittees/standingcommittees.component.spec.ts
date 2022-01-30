import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingcommitteesComponent } from './standingcommittees.component';

describe('StandingcommitteesComponent', () => {
  let component: StandingcommitteesComponent;
  let fixture: ComponentFixture<StandingcommitteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingcommitteesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingcommitteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
