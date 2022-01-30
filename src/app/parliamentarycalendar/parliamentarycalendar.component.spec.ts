import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParliamentarycalendarComponent } from './parliamentarycalendar.component';

describe('ParliamentarycalendarComponent', () => {
  let component: ParliamentarycalendarComponent;
  let fixture: ComponentFixture<ParliamentarycalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParliamentarycalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentarycalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
