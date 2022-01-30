import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsandactivitiesComponent } from './newsandactivities.component';

describe('NewsandactivitiesComponent', () => {
  let component: NewsandactivitiesComponent;
  let fixture: ComponentFixture<NewsandactivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsandactivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsandactivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
