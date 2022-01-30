import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingcommitteestabsComponent } from './standingcommitteestabs.component';

describe('StandingcommitteestabsComponent', () => {
  let component: StandingcommitteestabsComponent;
  let fixture: ComponentFixture<StandingcommitteestabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingcommitteestabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingcommitteestabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
