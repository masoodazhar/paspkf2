import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thesindhtrans2016Component } from './thesindhtrans2016.component';

describe('Thesindhtrans2016Component', () => {
  let component: Thesindhtrans2016Component;
  let fixture: ComponentFixture<Thesindhtrans2016Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Thesindhtrans2016Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Thesindhtrans2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
