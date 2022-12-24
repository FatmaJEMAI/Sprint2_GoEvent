import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListserviiceComponent } from './list-serviice.component';

describe('ListServiiceComponent', () => {
  let component: ListserviiceComponent;
  let fixture: ComponentFixture<ListserviiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListserviiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListserviiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
