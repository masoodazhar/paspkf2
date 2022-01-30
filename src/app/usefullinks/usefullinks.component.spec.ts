import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefullinksComponent } from './usefullinks.component';

describe('UsefullinksComponent', () => {
  let component: UsefullinksComponent;
  let fixture: ComponentFixture<UsefullinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsefullinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsefullinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
