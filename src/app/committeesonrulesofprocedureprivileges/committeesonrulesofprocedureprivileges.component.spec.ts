import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteesonrulesofprocedureprivilegesComponent } from './committeesonrulesofprocedureprivileges.component';

describe('CommitteesonrulesofprocedureprivilegesComponent', () => {
  let component: CommitteesonrulesofprocedureprivilegesComponent;
  let fixture: ComponentFixture<CommitteesonrulesofprocedureprivilegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteesonrulesofprocedureprivilegesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteesonrulesofprocedureprivilegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
