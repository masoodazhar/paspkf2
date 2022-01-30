import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderoftheoppositionComponent } from './leaderoftheopposition.component';

describe('LeaderoftheoppositionComponent', () => {
  let component: LeaderoftheoppositionComponent;
  let fixture: ComponentFixture<LeaderoftheoppositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderoftheoppositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderoftheoppositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
