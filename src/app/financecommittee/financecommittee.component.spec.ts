import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancecommitteeComponent } from './financecommittee.component';

describe('FinancecommitteeComponent', () => {
  let component: FinancecommitteeComponent;
  let fixture: ComponentFixture<FinancecommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancecommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancecommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
