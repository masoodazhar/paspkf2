import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderofthedayagendasessionsbasedComponent } from './orderofthedayagendasessionsbased.component';

describe('OrderofthedayagendasessionsbasedComponent', () => {
  let component: OrderofthedayagendasessionsbasedComponent;
  let fixture: ComponentFixture<OrderofthedayagendasessionsbasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderofthedayagendasessionsbasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderofthedayagendasessionsbasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
