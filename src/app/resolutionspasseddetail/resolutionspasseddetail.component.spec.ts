import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionspasseddetailComponent } from './resolutionspasseddetail.component';

describe('ResolutionspasseddetailComponent', () => {
  let component: ResolutionspasseddetailComponent;
  let fixture: ComponentFixture<ResolutionspasseddetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResolutionspasseddetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionspasseddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
