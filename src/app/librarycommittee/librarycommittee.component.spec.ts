import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrarycommitteeComponent } from './librarycommittee.component';

describe('LibrarycommitteeComponent', () => {
  let component: LibrarycommitteeComponent;
  let fixture: ComponentFixture<LibrarycommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrarycommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrarycommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
