import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteesonrulesofprocedureprivilegestabsComponent } from './committeesonrulesofprocedureprivilegestabs.component';

describe('CommitteesonrulesofprocedureprivilegestabsComponent', () => {
  let component: CommitteesonrulesofprocedureprivilegestabsComponent;
  let fixture: ComponentFixture<CommitteesonrulesofprocedureprivilegestabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteesonrulesofprocedureprivilegestabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteesonrulesofprocedureprivilegestabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
