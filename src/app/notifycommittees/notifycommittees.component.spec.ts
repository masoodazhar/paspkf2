import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifycommitteesComponent } from './notifycommittees.component';

describe('NotifycommitteesComponent', () => {
  let component: NotifycommitteesComponent;
  let fixture: ComponentFixture<NotifycommitteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifycommitteesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifycommitteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
