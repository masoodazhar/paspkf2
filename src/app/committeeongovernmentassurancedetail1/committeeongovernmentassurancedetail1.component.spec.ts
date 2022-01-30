import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Committeeongovernmentassurancedetail1Component } from './committeeongovernmentassurancedetail1.component';

describe('Committeeongovernmentassurancedetail1Component', () => {
  let component: Committeeongovernmentassurancedetail1Component;
  let fixture: ComponentFixture<Committeeongovernmentassurancedetail1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Committeeongovernmentassurancedetail1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Committeeongovernmentassurancedetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
