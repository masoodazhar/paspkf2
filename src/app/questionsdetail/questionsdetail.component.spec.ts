import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsdetailComponent } from './questionsdetail.component';

describe('QuestionsdetailComponent', () => {
  let component: QuestionsdetailComponent;
  let fixture: ComponentFixture<QuestionsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
