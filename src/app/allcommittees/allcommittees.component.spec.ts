import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcommitteesComponent } from './allcommittees.component';

describe('AllcommitteesComponent', () => {
  let component: AllcommitteesComponent;
  let fixture: ComponentFixture<AllcommitteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcommitteesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcommitteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
