import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofsessionsComponent } from './listofsessions.component';

describe('ListofsessionsComponent', () => {
  let component: ListofsessionsComponent;
  let fixture: ComponentFixture<ListofsessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofsessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofsessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
