import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormquestionComponent} from './form-question.component';

describe('FormQuestionComponent', () => {
  let component: FormquestionComponent;
  let fixture: ComponentFixture<FormquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
