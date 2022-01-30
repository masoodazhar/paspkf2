import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderofthedayagendaComponent } from './orderofthedayagenda.component';

describe('OrderofthedayagendaComponent', () => {
  let component: OrderofthedayagendaComponent;
  let fixture: ComponentFixture<OrderofthedayagendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderofthedayagendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderofthedayagendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
