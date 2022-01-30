import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalchartComponent } from './organizationalchart.component';

describe('OrganizationalchartComponent', () => {
  let component: OrganizationalchartComponent;
  let fixture: ComponentFixture<OrganizationalchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationalchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
