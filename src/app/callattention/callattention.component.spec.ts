import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallattentionComponent } from './callattention.component';

describe('CallattentionComponent', () => {
  let component: CallattentionComponent;
  let fixture: ComponentFixture<CallattentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallattentionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallattentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
