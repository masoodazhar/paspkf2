import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryofofficersComponent } from './directoryofofficers.component';

describe('DirectoryofofficersComponent', () => {
  let component: DirectoryofofficersComponent;
  let fixture: ComponentFixture<DirectoryofofficersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryofofficersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryofofficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
