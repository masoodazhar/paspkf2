import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowersfunctionsComponent } from './powersfunctions.component';

describe('PowersfunctionsComponent', () => {
  let component: PowersfunctionsComponent;
  let fixture: ComponentFixture<PowersfunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowersfunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowersfunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
