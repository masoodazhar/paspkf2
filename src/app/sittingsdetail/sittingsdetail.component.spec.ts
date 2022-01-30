import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SittingsdetailComponent } from './sittingsdetail.component';

describe('SittingsdetailComponent', () => {
  let component: SittingsdetailComponent;
  let fixture: ComponentFixture<SittingsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SittingsdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SittingsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
