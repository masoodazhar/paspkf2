import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcastlivevideoaudioComponent } from './webcastlivevideoaudio.component';

describe('WebcastlivevideoaudioComponent', () => {
  let component: WebcastlivevideoaudioComponent;
  let fixture: ComponentFixture<WebcastlivevideoaudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcastlivevideoaudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcastlivevideoaudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
