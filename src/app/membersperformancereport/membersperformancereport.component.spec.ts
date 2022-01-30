import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersperformancereportComponent } from './membersperformancereport.component';

describe('MembersperformancereportComponent', () => {
  let component: MembersperformancereportComponent;
  let fixture: ComponentFixture<MembersperformancereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersperformancereportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersperformancereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
