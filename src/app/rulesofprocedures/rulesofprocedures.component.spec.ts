import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesofproceduresComponent } from './rulesofprocedures.component';

describe('RulesofproceduresComponent', () => {
  let component: RulesofproceduresComponent;
  let fixture: ComponentFixture<RulesofproceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesofproceduresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesofproceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
