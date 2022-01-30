import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputyspeakerdetailComponent } from './deputyspeakerdetail.component';

describe('DeputyspeakerdetailComponent', () => {
  let component: DeputyspeakerdetailComponent;
  let fixture: ComponentFixture<DeputyspeakerdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeputyspeakerdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeputyspeakerdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
