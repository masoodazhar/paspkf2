import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceofassemblyComponent } from './performanceofassembly.component';

describe('PerformanceofassemblyComponent', () => {
  let component: PerformanceofassemblyComponent;
  let fixture: ComponentFixture<PerformanceofassemblyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerformanceofassemblyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceofassemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
