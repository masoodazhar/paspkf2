import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersdirectoryComponent } from './membersdirectory.component';

describe('MembersdirectoryComponent', () => {
  let component: MembersdirectoryComponent;
  let fixture: ComponentFixture<MembersdirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersdirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersdirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
