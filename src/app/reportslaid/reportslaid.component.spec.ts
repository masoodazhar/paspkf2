import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportslaidComponent } from './reportslaid.component';

describe('ReportslaidComponent', () => {
  let component: ReportslaidComponent;
  let fixture: ComponentFixture<ReportslaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportslaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportslaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
