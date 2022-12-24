import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormreservationComponent } from './form-reservation.component';

describe('FormreservationComponent', () => {
  let component: FormreservationComponent;
  let fixture: ComponentFixture<FormreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormreservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
