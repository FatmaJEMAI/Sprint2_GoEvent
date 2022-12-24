import { ComponentFixture, TestBed } from '@angular/core/testing';

import { editquestionComponent } from './editquestion.component';

describe('editquestionComponent', () => {
  let component: editquestionComponent;
  let fixture: ComponentFixture<editquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ editquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(editquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
