import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoarchiveComponent } from './videoarchive.component';

describe('VideoarchiveComponent', () => {
  let component: VideoarchiveComponent;
  let fixture: ComponentFixture<VideoarchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoarchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
