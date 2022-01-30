import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingofassemblyComponent } from './workingofassembly.component';

describe('WorkingofassemblyComponent', () => {
  let component: WorkingofassemblyComponent;
  let fixture: ComponentFixture<WorkingofassemblyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingofassemblyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingofassemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
