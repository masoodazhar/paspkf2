import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteesystemComponent } from './committeesystem.component';

describe('CommitteesystemComponent', () => {
  let component: CommitteesystemComponent;
  let fixture: ComponentFixture<CommitteesystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitteesystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteesystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
