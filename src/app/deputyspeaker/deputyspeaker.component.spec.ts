import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputyspeakerComponent } from './deputyspeaker.component';

describe('DeputyspeakerComponent', () => {
  let component: DeputyspeakerComponent;
  let fixture: ComponentFixture<DeputyspeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeputyspeakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeputyspeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
