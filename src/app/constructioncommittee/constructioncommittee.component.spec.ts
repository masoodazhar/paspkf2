import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructioncommitteeComponent } from './constructioncommittee.component';

describe('ConstructioncommitteeComponent', () => {
  let component: ConstructioncommitteeComponent;
  let fixture: ComponentFixture<ConstructioncommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructioncommitteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructioncommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
