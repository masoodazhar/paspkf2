import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActslistsdetailsComponent } from './actslistsdetails.component';

describe('ActslistsdetailsComponent', () => {
  let component: ActslistsdetailsComponent;
  let fixture: ComponentFixture<ActslistsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActslistsdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActslistsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
