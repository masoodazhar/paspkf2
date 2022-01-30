import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionspassedComponent } from './resolutionspassed.component';

describe('ResolutionspassedComponent', () => {
  let component: ResolutionspassedComponent;
  let fixture: ComponentFixture<ResolutionspassedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionspassedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionspassedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
