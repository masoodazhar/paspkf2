import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagesofbillsComponent } from './stagesofbills.component';

describe('StagesofbillsComponent', () => {
  let component: StagesofbillsComponent;
  let fixture: ComponentFixture<StagesofbillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagesofbillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagesofbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
