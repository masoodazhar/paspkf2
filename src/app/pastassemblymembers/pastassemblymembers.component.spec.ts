import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastassemblymembersComponent } from './pastassemblymembers.component';

describe('PastassemblymembersComponent', () => {
  let component: PastassemblymembersComponent;
  let fixture: ComponentFixture<PastassemblymembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastassemblymembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastassemblymembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
