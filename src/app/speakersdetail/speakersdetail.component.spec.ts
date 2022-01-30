import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersdetailComponent } from './speakersdetail.component';

describe('SpeakersdetailComponent', () => {
  let component: SpeakersdetailComponent;
  let fixture: ComponentFixture<SpeakersdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakersdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
