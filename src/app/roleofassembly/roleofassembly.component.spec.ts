import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleofassemblyComponent } from './roleofassembly.component';

describe('RoleofassemblyComponent', () => {
  let component: RoleofassemblyComponent;
  let fixture: ComponentFixture<RoleofassemblyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleofassemblyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleofassemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
