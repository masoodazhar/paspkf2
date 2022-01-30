import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturegalleryComponent } from './picturegallery.component';

describe('PicturegalleryComponent', () => {
  let component: PicturegalleryComponent;
  let fixture: ComponentFixture<PicturegalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturegalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturegalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
