import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListreservationComponent } from './list-reservation.component';

describe('ListReservationComponent', () => {
  let component: ListreservationComponent;
  let fixture: ComponentFixture<ListreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListreservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
