import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcommitteesdataComponent } from './allcommitteesdata.component';

describe('AllcommitteesdataComponent', () => {
  let component: AllcommitteesdataComponent;
  let fixture: ComponentFixture<AllcommitteesdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcommitteesdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcommitteesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
