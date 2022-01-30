import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Committeeongovernmentassurancedetail2Component } from './committeeongovernmentassurancedetail2.component';

describe('Committeeongovernmentassurancedetail2Component', () => {
  let component: Committeeongovernmentassurancedetail2Component;
  let fixture: ComponentFixture<Committeeongovernmentassurancedetail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Committeeongovernmentassurancedetail2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Committeeongovernmentassurancedetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
