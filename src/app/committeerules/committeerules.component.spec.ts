import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteerulesComponent } from './committeerules.component';

describe('CommitteerulesComponent', () => {
  let component: CommitteerulesComponent;
  let fixture: ComponentFixture<CommitteerulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteerulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteerulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
