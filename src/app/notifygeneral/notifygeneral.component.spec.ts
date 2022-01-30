import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifygeneralComponent } from './notifygeneral.component';

describe('NotifygeneralComponent', () => {
  let component: NotifygeneralComponent;
  let fixture: ComponentFixture<NotifygeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifygeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifygeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
