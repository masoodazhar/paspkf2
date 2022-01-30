import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressreleasesComponent } from './pressreleases.component';

describe('PressreleasesComponent', () => {
  let component: PressreleasesComponent;
  let fixture: ComponentFixture<PressreleasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressreleasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressreleasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
