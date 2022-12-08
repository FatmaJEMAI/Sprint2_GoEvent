import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormserviceComponent} from './form-service.component';

describe('FormserviceComponent', () => {
  let component: FormserviceComponent;
  let fixture: ComponentFixture<FormserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
