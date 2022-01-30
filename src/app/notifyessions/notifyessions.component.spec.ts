import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyessionsComponent } from './notifyessions.component';

describe('NotifyessionsComponent', () => {
  let component: NotifyessionsComponent;
  let fixture: ComponentFixture<NotifyessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifyessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
