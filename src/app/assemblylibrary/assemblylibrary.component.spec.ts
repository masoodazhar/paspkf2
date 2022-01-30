import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblylibraryComponent } from './assemblylibrary.component';

describe('AssemblylibraryComponent', () => {
  let component: AssemblylibraryComponent;
  let fixture: ComponentFixture<AssemblylibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssemblylibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblylibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
