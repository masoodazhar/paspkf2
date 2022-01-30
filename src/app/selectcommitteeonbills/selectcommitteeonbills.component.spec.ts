import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcommitteeonbillsComponent } from './selectcommitteeonbills.component';

describe('SelectcommitteeonbillsComponent', () => {
  let component: SelectcommitteeonbillsComponent;
  let fixture: ComponentFixture<SelectcommitteeonbillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectcommitteeonbillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectcommitteeonbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
