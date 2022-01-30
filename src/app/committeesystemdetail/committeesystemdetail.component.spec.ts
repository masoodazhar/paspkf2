import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteesystemdetailComponent } from './committeesystemdetail.component';

describe('CommitteesystemdetailComponent', () => {
  let component: CommitteesystemdetailComponent;
  let fixture: ComponentFixture<CommitteesystemdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteesystemdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteesystemdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
