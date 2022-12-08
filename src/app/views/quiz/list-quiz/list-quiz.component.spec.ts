import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListquizComponent } from './list-quiz.component';

describe('ListQuizComponent', () => {
  let component: ListquizComponent;
  let fixture: ComponentFixture<ListquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
