import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesofproceduresdetailComponent } from './rulesofproceduresdetail.component';

describe('RulesofproceduresdetailComponent', () => {
  let component: RulesofproceduresdetailComponent;
  let fixture: ComponentFixture<RulesofproceduresdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesofproceduresdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesofproceduresdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
