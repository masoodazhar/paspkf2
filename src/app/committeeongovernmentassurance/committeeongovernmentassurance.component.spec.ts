import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeongovernmentassuranceComponent } from './committeeongovernmentassurance.component';

describe('CommitteeongovernmentassuranceComponent', () => {
  let component: CommitteeongovernmentassuranceComponent;
  let fixture: ComponentFixture<CommitteeongovernmentassuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteeongovernmentassuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeongovernmentassuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
