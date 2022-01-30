import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActslistsComponent } from './actslists.component';

describe('ActslistsComponent', () => {
  let component: ActslistsComponent;
  let fixture: ComponentFixture<ActslistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActslistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActslistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
