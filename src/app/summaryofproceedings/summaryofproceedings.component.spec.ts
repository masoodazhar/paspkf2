import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryofproceedingsComponent } from './summaryofproceedings.component';

describe('SummaryofproceedingsComponent', () => {
  let component: SummaryofproceedingsComponent;
  let fixture: ComponentFixture<SummaryofproceedingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryofproceedingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryofproceedingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
