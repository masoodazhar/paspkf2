import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsdetailComponent } from './billsdetail.component';

describe('BillsdetailComponent', () => {
  let component: BillsdetailComponent;
  let fixture: ComponentFixture<BillsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
