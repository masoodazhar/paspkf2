import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParliamentaryprivilegesComponent } from './parliamentaryprivileges.component';

describe('ParliamentaryprivilegesComponent', () => {
  let component: ParliamentaryprivilegesComponent;
  let fixture: ComponentFixture<ParliamentaryprivilegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParliamentaryprivilegesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParliamentaryprivilegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
