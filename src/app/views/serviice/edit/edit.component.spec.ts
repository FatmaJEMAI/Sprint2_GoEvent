import { ComponentFixture, TestBed } from '@angular/core/testing';

import { editComponent } from './edit.component';

describe('editComponent', () => {
  let component: editComponent;
  let fixture: ComponentFixture<editComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ editComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(editComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
