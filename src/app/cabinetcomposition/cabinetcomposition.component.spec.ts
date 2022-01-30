import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetcompositionComponent } from './cabinetcomposition.component';

describe('CabinetcompositionComponent', () => {
  let component: CabinetcompositionComponent;
  let fixture: ComponentFixture<CabinetcompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetcompositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinetcompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
