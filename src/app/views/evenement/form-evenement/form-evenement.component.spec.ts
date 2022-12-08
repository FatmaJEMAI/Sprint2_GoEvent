import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEvenementComponent } from './form-evenement.component';

describe('FormEvenementComponent', () => {
  let component: FormEvenementComponent;
  let fixture: ComponentFixture<FormEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
