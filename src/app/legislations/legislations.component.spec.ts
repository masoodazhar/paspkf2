import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegislationsComponent } from './legislations.component';

describe('LegislationsComponent', () => {
  let component: LegislationsComponent;
  let fixture: ComponentFixture<LegislationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegislationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegislationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
