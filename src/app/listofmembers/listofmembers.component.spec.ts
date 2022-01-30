import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofmembersComponent } from './listofmembers.component';

describe('ListofmembersComponent', () => {
  let component: ListofmembersComponent;
  let fixture: ComponentFixture<ListofmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofmembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
