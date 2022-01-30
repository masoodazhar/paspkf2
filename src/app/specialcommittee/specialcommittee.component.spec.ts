import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialcommitteeComponent } from './specialcommittee.component';

describe('SpecialcommitteeComponent', () => {
  let component: SpecialcommitteeComponent;
  let fixture: ComponentFixture<SpecialcommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialcommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialcommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
