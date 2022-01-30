import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderofthehouseComponent } from './leaderofthehouse.component';

describe('LeaderofthehouseComponent', () => {
  let component: LeaderofthehouseComponent;
  let fixture: ComponentFixture<LeaderofthehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderofthehouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderofthehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
