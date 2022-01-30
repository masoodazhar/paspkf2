import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentassemblysummaryComponent } from './currentassemblysummary.component';

describe('CurrentassemblysummaryComponent', () => {
  let component: CurrentassemblysummaryComponent;
  let fixture: ComponentFixture<CurrentassemblysummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentassemblysummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentassemblysummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
