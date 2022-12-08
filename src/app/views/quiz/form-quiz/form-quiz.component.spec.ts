import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormquizComponent } from './form-quiz.component';

describe('FormQuizComponent', () => {
  let component: FormquizComponent;
  let fixture: ComponentFixture<FormquizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormquizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
