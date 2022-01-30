import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifymembersComponent } from './notifymembers.component';

describe('NotifymembersComponent', () => {
  let component: NotifymembersComponent;
  let fixture: ComponentFixture<NotifymembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifymembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifymembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
