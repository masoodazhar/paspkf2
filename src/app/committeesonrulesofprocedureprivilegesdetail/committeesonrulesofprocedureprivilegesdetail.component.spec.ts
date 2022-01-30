import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteesonrulesofprocedureprivilegesdetailComponent } from './committeesonrulesofprocedureprivilegesdetail.component';

describe('CommitteesonrulesofprocedureprivilegesdetailComponent', () => {
  let component: CommitteesonrulesofprocedureprivilegesdetailComponent;
  let fixture: ComponentFixture<CommitteesonrulesofprocedureprivilegesdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteesonrulesofprocedureprivilegesdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteesonrulesofprocedureprivilegesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
