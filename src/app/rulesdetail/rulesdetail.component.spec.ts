import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesdetailComponent } from './rulesdetail.component';

describe('RulesdetailComponent', () => {
  let component: RulesdetailComponent;
  let fixture: ComponentFixture<RulesdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
